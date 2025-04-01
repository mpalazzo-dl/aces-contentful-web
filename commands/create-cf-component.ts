#!/usr/bin/env tsx

import { mkdirSync, writeFileSync, existsSync, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";
import fetch from "node-fetch";
import inquirer from "inquirer";

dotenv.config();

// CLI Prompt
const askUserChoices = async () => {
  const { createContentModel } = await inquirer.prompt([
    {
      type: "confirm",
      name: "createContentModel",
      message: "Would you like to create the Contentful Model?",
      default: true,
    },
  ]);

  let componentType = "Block";
  let addToPageBody = false;

  if (createContentModel) {
    const { selectedType } = await inquirer.prompt([
      {
        type: "list",
        name: "selectedType",
        message: "Is this component a Block or Inline?",
        choices: ["Block", "Inline"],
        default: "Block",
      },
    ]);
    componentType = selectedType.trim();

    if (componentType === "Block") {
      const { addToBody } = await inquirer.prompt([
        {
          type: "confirm",
          name: "addToBody",
          message: "Would you like to add this to the 📄 Page Body?",
          default: true,
        },
      ]);
      addToPageBody = addToBody;
    }
  }

  return { createContentModel, componentType, addToPageBody };
};

// Get component name from CLI args
const componentName = process.argv.slice(2).join(" ");
if (!componentName) {
  console.error("❌  Please provide a component name.");
  console.error("💡 Usage: npm run create-cf-component <component-name>");
  process.exit(1);
}

// Helpers
const toPascalCase = (str: string) =>
  str.replace(/(^\w|[\s-_]\w)/g, (match) =>
    match.replace(/[\s-_]/, "").toUpperCase(),
  );
const toCamelCase = (str: string) =>
  str
    .replace(/(?:^\w|[\s-_]\w)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase(),
    )
    .replace(/[\s-_]/g, "");
const toKebabCase = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

// Processed names
const reactCasedName = toPascalCase(componentName);
const camelCasedName = toCamelCase(componentName);
const componentDir = `cf-${toKebabCase(componentName)}`;

// Define paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const cfDir = join(__dirname, "..", "src", "libs", "cf", "lib");
const componentPath = join(cfDir, componentDir);
const indexFilePath = join(cfDir, "../index.ts");
const pageBodyQueryFilePath = join(
  __dirname,
  "..",
  "src",
  "libs",
  "clients",
  "contentful",
  "lib",
  "queries",
  "page-queries.tsx",
);
const pageBodyFilePath = join(
  __dirname,
  "..",
  "src",
  "libs",
  "features",
  "lib",
  "page-body",
  "page-body-default.tsx",
);

// Contentful API Credentials
const SPACE_ID = process.env.NEXT_PUBLIC_CF_SPACE!;
const ENVIRONMENT_ID = process.env.NEXT_PUBLIC_CF_ENVIRONMENT!;
const CMA_TOKEN = process.env.NEXT_CF_MANAGEMENT_TOKEN!;
const PAGE_MODEL_ID = "page";
const PAGE_BODY_FIELD_ID = "pageBody";

// Function to create and publish the Contentful model
const createAndPublishContentfulModel = async (componentType: string) => {
  try {
    const contentTypeId = toKebabCase(componentName);
    const emoji = componentType === "Block" ? "🔷" : "🔶";
    const contentModelName = `${emoji} ${componentName}`;

    const checkResponse = await fetch(
      `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/content_types/${contentTypeId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${CMA_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (checkResponse.ok) {
      console.log(`ℹ️ Content model "${contentModelName}" already exists.`);
      return;
    }

    console.log(`🚀 Creating content model "${contentModelName}"...`);

    const createResponse = await fetch(
      `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/content_types/${contentTypeId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${CMA_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contentModelName,
          displayField: "internalTitle",
          fields: [
            {
              id: "internalTitle",
              name: "Internal Title",
              type: "Symbol",
              required: true,
              validations: [{ unique: true }],
            },
          ],
        }),
      },
    );

    if (!createResponse.ok) {
      throw new Error(
        `Failed to create content model: ${await createResponse.text()}`,
      );
    }

    console.log(`✅ Content model "${contentModelName}" created successfully.`);

    console.log(`🚀 Publishing content model "${contentModelName}"...`);

    const publishResponse = await fetch(
      `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/content_types/${contentTypeId}/published`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${CMA_TOKEN}`,
          "X-Contentful-Version": "1",
        },
      },
    );

    if (!publishResponse.ok) {
      throw new Error(
        `Failed to publish content model: ${await publishResponse.text()}`,
      );
    }

    console.log(`✅ Content model "${contentModelName}" published.`);
  } catch (error) {
    console.error("Error handling content model:", error);
  }
};

// Function to update the "pageBody" field in the Page model
const updatePageBodyValidation = async (newComponentId: string) => {
  try {
    console.log(
      `🚀 Fetching current validation rules for "pageBody" in "Page" model...`,
    );

    const pageResponse = await fetch(
      `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/content_types/${PAGE_MODEL_ID}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${CMA_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!pageResponse.ok) {
      throw new Error(
        `Failed to fetch "Page" model: ${await pageResponse.text()}`,
      );
    }

    const pageData: any = await pageResponse.json();
    const fields = pageData.fields;

    const pageBodyField = fields.find(
      (field: any) => field.id === PAGE_BODY_FIELD_ID,
    );
    if (!pageBodyField) {
      throw new Error(`❌ "pageBody" field not found in "Page" model.`);
    }

    const existingValidations = pageBodyField.items?.validations || [];
    let existingTypes: string[] = [];

    const linkContentTypeValidation = existingValidations.find(
      (validation: any) => validation.hasOwnProperty("linkContentType"),
    );

    if (linkContentTypeValidation) {
      existingTypes = linkContentTypeValidation.linkContentType;
    }

    if (existingTypes.includes(newComponentId)) {
      console.log(
        `ℹ️ Component "${newComponentId}" is already allowed in "pageBody".`,
      );
      return;
    }

    const modelValidationNaming = (str: string) => {
      return str
        .trim()
        .replace(/[\s_]+/g, "-")
        .replace(/[A-Z]/g, (match) => "-" + match.toLowerCase())
        .toLowerCase();
    };

    const updatedTypes = [
      ...existingTypes,
      modelValidationNaming(newComponentId),
    ];

    pageBodyField.items.validations = [{ linkContentType: updatedTypes }];

    console.log(`🚀 Updating "pageBody" field in "Page" model...`);

    const updateResponse = await fetch(
      `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/content_types/${PAGE_MODEL_ID}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${CMA_TOKEN}`,
          "Content-Type": "application/json",
          "X-Contentful-Version": pageData.sys.version.toString(),
        },
        body: JSON.stringify(pageData),
      },
    );

    if (!updateResponse.ok) {
      throw new Error(
        `Failed to update "Page" model: ${await updateResponse.text()}`,
      );
    }

    console.log(
      `✅ Successfully added "${newComponentId}" to "pageBody" field.`,
    );

    console.log(`🚀 Publishing "Page" model...`);

    const publishResponse = await fetch(
      `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/content_types/${PAGE_MODEL_ID}/published`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${CMA_TOKEN}`,
          "X-Contentful-Version": (pageData.sys.version + 1).toString(),
        },
      },
    );

    if (!publishResponse.ok) {
      throw new Error(
        `Failed to publish "Page" model: ${await publishResponse.text()}`,
      );
    }

    console.log(`✅ "Page" model published successfully.`);
  } catch (error) {
    console.error("❌ Error updating Page model:", error);
  }
};

// Prevent duplicate component creation
if (existsSync(componentPath)) {
  console.error(`⚠️  Component "${componentDir}" already exists.`);
  process.exit(1);
}

// Define boilerplate files
const createComponentFiles = () => {
  const files: Record<string, string> = {
    "index.tsx": `import type { CfFetchById } from "@maverick/types";

import { Cf${reactCasedName} } from "./render";
import { fetch${reactCasedName}Data } from "./services";
import { ${reactCasedName}Skeleton } from "./skeleton";

export interface Cf${reactCasedName}ServerProps extends CfFetchById {}

export const Cf${reactCasedName}Server = async ({
  id,
  preview,
  lang,
}: Cf${reactCasedName}ServerProps) => {
  let data;

  try {
    data = await fetch${reactCasedName}Data(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <${reactCasedName}Skeleton />;
  }

  if (!data) {
    return <${reactCasedName}Skeleton />;
  }

  return (
    <Cf${reactCasedName}
      internalTitle={data.internalTitle}
      //TODO: Add more props here
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};`,
    "render.tsx": `import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Container, H1 } from "@maverick/ui";

export interface Cf${reactCasedName}Props extends CfBaseComponent {}

export const Cf${reactCasedName} = ({
  internalTitle,
  //TODO: Add more props here
  __typename,
  id,
  lang,
}: Cf${reactCasedName}Props) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.xs, md: componentSpacing.md }}
    >
      <Container>
        <H1
          {...ContentfulLivePreview.getProps({
            entryId: id,
            fieldId: "internalTitle",
            locale: lang,
          })}
        >
          This is my ${reactCasedName}
        </H1>
      </Container>
    </Box>
  );
};`,
    "services.tsx": `import { gql } from "@apollo/client";

import { defaultLocale } from "@maverick/i18n";
import { cfClient, cfPreviewClient } from "@maverick/contentful";

export const ${reactCasedName}Query = gql\`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    ${camelCasedName}(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      # TODO: Define your NewComponent GraphQL query here
      sys {
        id
      }
    }
  }
\`;

export const fetch${reactCasedName}Data = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: ${reactCasedName}Query,
      variables: { id, preview, locale },
    });

    return response.data.${camelCasedName};
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};`,
    "skeleton.tsx": `import { Skeleton } from "@maverick/ui";

export const ${reactCasedName}Skeleton = () => {
  return <Skeleton width={"100%"} height={280} />;
};`,
  };

  // Create component directory & files
  mkdirSync(componentPath, { recursive: true });
  Object.entries(files).forEach(([fileName, content]) => {
    const filePath = join(componentPath, fileName);
    writeFileSync(filePath, content);
    console.log(`✅ Created ${filePath}`);
  });

  // Update index.ts exports
  const exportLines = `\nexport * from "./lib/${componentDir}";\nexport * from "./lib/${componentDir}/render";\nexport * from "./lib/${componentDir}/services";\nexport * from "./lib/${componentDir}/skeleton";\n`;

  if (!existsSync(indexFilePath)) {
    writeFileSync(indexFilePath, exportLines);
  } else {
    const indexContent = readFileSync(indexFilePath, "utf8");
    if (!indexContent.includes(`./lib/${componentDir}`)) {
      writeFileSync(indexFilePath, indexContent + exportLines);
      console.log(`✅ Updated index.ts`);
    }
  }
};

// Function to update Default Page Body Query
const updateDefaultPageBodyQuery = (reactCasedName: string) => {
  if (!existsSync(pageBodyQueryFilePath)) {
    console.error(
      "❌ Default Page Body Query file not found. Manually add the component.",
    );
    return;
  }

  try {
    const fileContent = readFileSync(pageBodyQueryFilePath, "utf8");

    if (fileContent.includes(`... on ${reactCasedName} {`)) {
      console.log(
        `ℹ️ Component "${reactCasedName}" is already in the Default Page Body Query.`,
      );
      return;
    }

    console.log(
      `🚀 Adding "${reactCasedName}" to the Default Page Body Query...`,
    );

    const regex = /(          __typename)/;

    const newFragment = `          ... on ${reactCasedName} {\n            sys {\n              id\n            }\n          }\n`;

    const updatedContent = fileContent.replace(regex, newFragment + "$1");

    writeFileSync(pageBodyQueryFilePath, updatedContent, "utf8");
    console.log(`✅ Added "${reactCasedName}" to Default Page Body Query.`);
  } catch (error) {
    console.error("❌ Error updating Default Page Body Query:", error);
  }
};

// Function to update Default Page Body component
const updateDefaultPageBodyComponent = (reactCasedName: string) => {
  if (!existsSync(pageBodyFilePath)) {
    console.error(
      "❌ Default Page Body file not found. Manually add the component.",
    );
    return;
  }

  try {
    let fileContent = readFileSync(pageBodyFilePath, "utf8");

    // Update the import statement
    const importStatement = `Cf${reactCasedName}Server`;
    if (!fileContent.includes(importStatement)) {
      console.log(
        `🚀 Adding "${reactCasedName}" to Default Page Body imports...`,
      );

      const importRegex = /import \{([\s\S]*?)\} from "@maverick\/cf";/;
      fileContent = fileContent.replace(importRegex, (match, group) => {
        const cleanedGroup = group.trim().replace(/,\s*$/, "");
        return `import {\n  ${cleanedGroup},\n  ${importStatement}\n} from "@maverick/cf";`;
      });

      console.log(`✅ Added "${reactCasedName}" to imports.`);
    } else {
      console.log(
        `ℹ️ Component "${reactCasedName}" is already in the imports.`,
      );
    }

    // Update the switch statement
    if (!fileContent.includes(`case "${reactCasedName}":`)) {
      console.log(
        `🚀 Adding "${reactCasedName}" to the Default Page Body switch statement...`,
      );

      const switchCaseRegex = /(\s+default:\s+return null;)/;
      const newCase = `\n          case "${reactCasedName}":\n            return (\n              <Cf${reactCasedName}Server\n                id={item?.sys?.id || ""}\n                preview={preview}\n                lang={lang}\n                key={index}\n              />\n            );\n`;

      fileContent = fileContent.replace(switchCaseRegex, newCase + "$1");

      console.log(`✅ Added "${reactCasedName}" to switch statement.`);
    } else {
      console.log(
        `ℹ️ Component "${reactCasedName}" is already in the switch statement.`,
      );
    }

    fileContent = fileContent
      .replace(/\n{3,}/g, "\n\n")
      .replace(/,(\s*})/g, "$1");

    writeFileSync(pageBodyFilePath, fileContent, "utf8");
    console.log(
      `✅ Successfully updated Default Page Body with "${reactCasedName}".`,
    );
  } catch (error) {
    console.error("❌ Error updating Default Page Body:", error);
  }
};

// 🚀 Run the script
(async () => {
  const { createContentModel, componentType, addToPageBody } =
    await askUserChoices();

  createComponentFiles();

  if (createContentModel) {
    await createAndPublishContentfulModel(componentType);
  }

  if (addToPageBody) {
    console.log(`🚀 Updating "pageBody" field with new component...`);
    await updatePageBodyValidation(camelCasedName);
    updateDefaultPageBodyQuery(reactCasedName);
    updateDefaultPageBodyComponent(reactCasedName);
  }

  console.log(`🎉 Component "${componentDir}" scaffold created successfully!`);
})();

#!/usr/bin/env ts-node

import { execSync } from "child_process";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const spaceId = process.env.NEXT_PUBLIC_CF_SPACE;
const managementToken = process.env.NEXT_CF_MANAGEMENT_TOKEN;
const environment = process.env.NEXT_PUBLIC_CF_ENVIRONMENT;

if (!spaceId || !managementToken || !environment) {
  console.error(
    "❌  Please set NEXT_PUBLIC_CF_SPACE, NEXT_PUBLIC_CF_ENVIRONMENT and NEXT_CF_MANAGEMENT_TOKEN environment variables.",
  );
  process.exit(1);
}

const importFile = "./commands/json/content-export.json";

// Command to import content into the new space
const command = `contentful space import --space-id ${spaceId} --environment-id ${environment} --management-token ${managementToken} --content-file ${importFile} --skip-content-model`;

try {
  execSync(command, { stdio: "inherit" });
  console.log("✅ Content import completed successfully.");
} catch (error) {
  console.error("❌  Error during content import:", error);
  process.exit(1);
}

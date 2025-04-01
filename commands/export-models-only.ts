#!/usr/bin/env ts-node

import * as dotenv from "dotenv";
import { execSync } from "child_process";

// Load environment variables from .env
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

const exportDir = "./commands/json";
const exportFile = "models-export.json";
const command = `contentful space export --content-model-only --space-id ${spaceId} --environment-id ${environment} --management-token ${managementToken} --export-dir ${exportDir} --content-file ${exportFile} --skip-content`;

try {
  execSync(command, { stdio: "inherit" });
  console.log("🎉 Contentful content model export completed successfully!");
} catch (error) {
  console.error("❌ Error during Contentful content model export:", error);
  process.exit(1);
}

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

/* Get __dirname in ES modules */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/* Resolve the path to the package.json in the current working directory */
const currentDir = process.cwd() /* Get the current directory from which the script is executed */
const packageJsonPath = path.resolve(currentDir, "package.json") /* Adjusted to use cwd */

/* Read and parse package.json */
let packageJson
try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"))
} catch (error) {
  console.error(`Error reading package.json in ${currentDir}:`, error.message)
  process.exit(1)
}

/* Fix 'exports.import' key order */
const exports = packageJson.exports?.["."]
if (exports?.import) {
  const keys = Object.keys(exports.import)

  /* Check if "default" is the last key */
  if (keys[keys.length - 1] !== "default") {
    console.log('"default" is not the last key in "exports.import". Reordering...')

    /* Reorder keys to ensure "default" is last */
    const reordered = keys
      .filter((key) => key !== "default")
      .concat("default") /* Add "default" at the end */
      .reduce((obj, key) => {
        obj[key] = exports.import[key]
        return obj
      }, {})

    /* Update the package.json object */
    packageJson.exports["."].import = reordered

    console.log("Fixed 'exports.import' key order in package.json.")
  } else {
    console.log('"default" is already the last key in "exports.import". No changes made.')
  }
}

/* Ensure peerDependencies include required entries */
const requiredPeerDependencies = {
  "@types/react": "*",
  "@types/react-dom": "*",
  "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
  "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
}

packageJson.peerDependencies = packageJson.peerDependencies || {}

let updatedPeerDeps = false
for (const [key, version] of Object.entries(requiredPeerDependencies)) {
  if (packageJson.peerDependencies[key] !== version) {
    packageJson.peerDependencies[key] = version
    updatedPeerDeps = true
    console.log(`Updated peerDependency: "${key}" to version "${version}".`)
  }
}

if (!updatedPeerDeps) {
  console.log("Added all required peerDependencies.")
}

/* Write the updated package.json back to disk */
try {
  fs.writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)
  console.log("Updated package.json successfully.")
} catch (error) {
  console.error("Error writing package.json:", error.message)
  process.exit(1)
}

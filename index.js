const packageNotifier = require("@mgalacyber/package-notifier");
const packageJson = require("./package.json");
packageNotifier(packageJson);

module.exports = require("./src");
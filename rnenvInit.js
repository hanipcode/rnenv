const fs = require("fs");
const basePath = process.cwd();
const envPath = `${basePath}/env`;
const jsPath = `${basePath}/env/index.js`;
const devPath = `${basePath}/env/development.env`;
if (!fs.existsSync(envPath)) {
  fs.mkdirSync(`${basePath}/env`);
}
if (!fs.existsSync(jsPath)) {
  fs.writeFileSync(jsPath, "module.exports = {}");
}
if (!fs.existsSync(devPath)) {
  fs.writeFileSync(devPath, "API_URL=localhost:8000");
}

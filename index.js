const envfile = require("envfile");
const crossEnv = require("./src/envRunner");
const fs = require("fs");

function parseEnv(envName = "development") {
  const envBasePath = `${process.cwd()}/env`;
  const filePath = `${envBasePath}/${envName}.env`;
  const parsedEnvString = JSON.stringify(
    envfile.parseFileSync(filePath),
    null,
    2
  );

  const templateString = `
  module.exports = ${parsedEnvString}
  `;
  const jsPath = `${envBasePath}/index.js`;
  console.log(parsedEnvString);
  fs.writeFileSync(jsPath, templateString);
}

crossEnv(process.argv.slice(2), args => {
  parseEnv(args.ENV);
});

// parseEnv("development");

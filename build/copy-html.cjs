const fs = require("fs").promises;
const path = require("path");

module.exports = async function ({ outDir }) {
  const source = "./src/index.html";
  const destination = `${outDir}/index.html`;

  const sourceFilePath = path.resolve(process.cwd(), source);
  const destinationFilePath = path.resolve(process.cwd(), destination);

  try {
    await fs.mkdir(path.dirname(destinationFilePath), { recursive: true });
    await fs.copyFile(sourceFilePath, destinationFilePath);
    console.log(`${source} was copied to ${destination}`);
  } catch (err) {
    console.error(err);
  }
};

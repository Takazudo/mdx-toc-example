import { promises as fs } from "fs";
import path from "path";

const copyHtml = async function fileProcessor({ outDir }) {
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

export { copyHtml };

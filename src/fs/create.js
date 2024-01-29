import { writeFile } from "node:fs";
import ifExists from "./ifExists.js";

const create = async () => {
    const content = 'I am fresh and young';
    const pathToFile = new URL('files/fresh.txt', import.meta.url).pathname.substring(1);
    if (await ifExists(pathToFile)){
        throw new Error('FS operation failed');
    } else {
        writeFile(pathToFile, content, () => {
            console.log('File is created successfully!');
        });
    }
};
try {
    await create();
} catch (e) {
    console.error(e)
}

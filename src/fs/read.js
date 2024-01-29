import { readFile } from 'node:fs/promises';
import ifExists from "./ifExists.js";

const read = async () => {
    const pathToFile = new URL('files_copy/', import.meta.url).pathname.substring(1);
    const targetFile = pathToFile + 'fileToRead.txt';
    if (!await ifExists(targetFile)){
        throw new Error('FS operation failed');
    }
    let data = await readFile(targetFile, { encoding: 'utf8' });
    console.log(data);
};

try{
    await read();
} catch (e) {
    console.error(e)
}

import { rm } from 'node:fs/promises';
import ifExists from "./ifExists.js";

const remove = async () => {
    const pathToFile = new URL('files_copy/', import.meta.url).pathname.substring(1);
    const targetFile = pathToFile + 'fileToRemove.txt';
    if (!await ifExists(targetFile)){
        throw new Error('FS operation failed');
    }

    await rm(targetFile);
};

try{
    await remove();
} catch (e) {
    console.error(e)
}

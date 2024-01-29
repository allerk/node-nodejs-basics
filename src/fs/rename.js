import { rename as rename_promise } from 'node:fs/promises';
import ifExists from "./ifExists.js";

const rename = async () => {
    const pathToFile = new URL('files_copy/', import.meta.url).pathname.substring(1);
    const targetNameOne = pathToFile + 'wrongFileName.txt';
    const targetNameTwo = pathToFile + 'wrongFileName.md';
    if (!await ifExists(targetNameOne) || await ifExists(targetNameTwo)){
        throw new Error('FS operation failed');
    }

    await rename_promise(targetNameOne, targetNameTwo);
};

try {
    await rename();
} catch (e) {
    console.error(e);
}

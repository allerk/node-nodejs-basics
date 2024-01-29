import url from "url";
import { readdir } from 'node:fs/promises';
import ifExists from "./ifExists.js";

const list = async () => {
    const path = url.fileURLToPath(new URL('.', import.meta.url));
    const folderName = path + 'files';
    if (!await ifExists(folderName)){
        throw new Error('FS operation failed');
    }

    (await readdir(folderName)).map(item => {
        console.log(item);
    })
};

try {
    await list();
} catch (e) {
    console.error(e)
}

import url from "url";
import { cp } from 'node:fs/promises';
import ifExists from "./ifExists.js";

const copy = async () => {
    const path = url.fileURLToPath(new URL('.', import.meta.url));
    const folderNameOriginal = path + 'files';
    const folderNameCopy = path + 'files_copy';
    if (!await ifExists(folderNameOriginal) || await ifExists(folderNameCopy)){
        throw new Error('FS operation failed');
    }

    await cp(folderNameOriginal, folderNameCopy, { recursive: true })
};

try {
    await copy();
} catch (e) {
    console.error(e)
}

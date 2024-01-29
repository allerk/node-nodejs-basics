import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
    const path = fileURLToPath(new URL('files/fileToCompress.txt', import.meta.url));
    const pathToGz = fileURLToPath(new URL('.', import.meta.url));
    let readStream = createReadStream(path, 'utf8');
    let writeStream = createWriteStream(pathToGz + 'archive.gz');
    let zip = createGzip();
    readStream.pipe(zip).pipe(writeStream);
};

await compress();

import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";

const decompress = async () => {
    const pathToArchive = fileURLToPath(new URL('archive.gz', import.meta.url));
    const pathToDecompress = fileURLToPath(new URL('files/fileDecompressed.txt', import.meta.url));
    let readStream = createReadStream(pathToArchive);
    let writeStream = createWriteStream(pathToDecompress);
    let unzip = createUnzip();
    readStream.pipe(unzip).pipe(writeStream);
};

await decompress();

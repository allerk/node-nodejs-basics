import { createWriteStream } from 'node:fs';

const write = async () => {
    const pathToFile = new URL('files/fileToWrite.txt', import.meta.url);
    const stream = createWriteStream(pathToFile);
    process.stdin.pipe(stream);
};

await write();

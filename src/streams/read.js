import { createReadStream } from 'node:fs';

const read = async () => {
    const pathToFile = new URL('files/fileToRead.txt', import.meta.url);
    const stream = createReadStream(pathToFile).setEncoding('utf8');
    stream.on('data', (data) => {
        process.stdout.write(data);
    })
};

await read();

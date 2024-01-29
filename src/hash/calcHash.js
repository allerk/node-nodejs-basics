import { fileURLToPath } from "url";
import fs from "fs";
import { createReadStream } from 'node:fs';
import crypto from "crypto";

const calculateHash = async () => {
    const filePath = fileURLToPath(new URL('files/fileToCalculateHashFor.txt', import.meta.url));
    const readStream  = createReadStream(filePath);
    readStream.on('data', (chuck) => {
        const algorithm = 'sha256';
        const hash = crypto.createHash(algorithm).update(chuck.toString()).digest();
        console.log(`Result: ${hash.toString('hex')}`)
        readStream.destroy();
    })
};

await calculateHash();

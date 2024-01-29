import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { createRequire } from 'module';
import './files/c.js'

const __filename = import.meta.url;
const __dirname = new URL('.', import.meta.url).pathname;

const random = Math.random();

export let unknownObject;
const requireJSON = createRequire(import.meta.url);
const pathToFiles = new URL('files/', import.meta.url).pathname.substring(1);
if (random > 0.5) {
    const absolutePath = path.resolve(pathToFiles, 'a.json');
    unknownObject = requireJSON(absolutePath)

} else {
    const absolutePath = path.resolve(pathToFiles, 'b.json');
    unknownObject = requireJSON(absolutePath)
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


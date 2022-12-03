import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import './files/c.js';
import unknownObjectA from './files/a.json' assert { type: 'json' };
import unknownObjectB from './files/b.json' assert { type: 'json' };

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = unknownObjectA;
} else {
    unknownObject = unknownObjectB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${process.argv[1]}`);
console.log(`Path to current directory is ${path.dirname(process.argv[1])}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};


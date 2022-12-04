import { readFile } from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
    readFile(`${path.dirname(process.argv[1])}${path.sep}files${path.sep}fileToRead.txt`, { encoding: 'utf8' })
        .then((content) => {
            console.log(content);
        })
        .catch((err) => {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed')
            }
        })
};

await read();
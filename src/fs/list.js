import { readdir } from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
    readdir(`${path.dirname(process.argv[1])}${path.sep}files`)
    .then( (files) => {
        for (const file of files){
            console.log(file)
        }
    })
    .catch((err) => {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    })
};

await list();
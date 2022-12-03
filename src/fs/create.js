import { stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
    const filepath = `${path.dirname(process.argv[1])}${path.sep}files${path.sep}fresh.txt`
    stat(filepath)
        .then(() => { throw new Error('FS operation failed') })
        .catch((err) => {
            if (err.code === 'ENOENT') {
                writeFile(filepath, 'I am fresh and young')
            } else {
                throw new Error('FS operation failed');
            }
        })
};

await create();
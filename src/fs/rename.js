import { stat, rename as renamefs } from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
    const oldName = `${path.dirname(process.argv[1])}${path.sep}files${path.sep}wrongFilename.txt`;
    const newName = `${path.dirname(process.argv[1])}${path.sep}files${path.sep}properFilename.md`;
    stat(oldName)
        .then(() => {
            stat(newName)
                .then(() => { throw new Error('FS operation failed') })
                .catch((err) => {
                    if (err.code === 'ENOENT') {
                        renamefs(oldName, newName)
                    } else {
                        throw new Error('FS operation failed');
                    }
                })
        })
        .catch((err) => {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed')
            }
        })
};

await rename();
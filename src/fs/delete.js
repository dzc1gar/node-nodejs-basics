import { rm } from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
    rm(`${path.dirname(process.argv[1])}${path.sep}files${path.sep}fileToRemove.txt`)
        .catch(
            (err) => {
                if (err.code === 'ENOENT') {
                    throw new Error('FS operation failed');
                }
                console.error(err)
            }
        )
};

await remove();
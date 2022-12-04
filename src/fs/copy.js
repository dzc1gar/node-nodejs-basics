import { stat, cp } from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
    const src = `${path.dirname(process.argv[1])}${path.sep}files`
    const dst = `${path.dirname(process.argv[1])}${path.sep}files_copy`
    stat(src)
        .then(() => {
            stat(dst)
                .then(() => {
                    throw new Error('FS operation failed');
                })
                .catch((err) => {
                    if (err.code === 'ENOENT') {
                        cp(src, dst, { recursive: true })
                    } else {
                        throw new Error('FS operation failed');
                    }
                })
        })
        .catch(() => {
            throw new Error('FS operation failed');
        })
};

copy();
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { argv } from 'node:process';
import { stat } from 'node:fs/promises';
import { error } from 'node:console';

const decompress = async () => {
    const source = `${path.dirname(argv[1])}${path.sep}files${path.sep}archive.gz`
    stat(source)
    .then(() => {
        const gunzip = createGunzip();
        const sourceStream = createReadStream(source);
        const destination = createWriteStream(`${path.dirname(argv[1])}${path.sep}files${path.sep}fileToCompress.txt`);
        pipeline(sourceStream, gunzip, destination, (err) => { if (err) { console.log(err) } });
    })
    .catch((err) => {console.error(err)})

};

await decompress();
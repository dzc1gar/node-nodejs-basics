import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { argv } from 'node:process';

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(`${path.dirname(argv[1])}${path.sep}files${path.sep}fileToCompress.txt`);
    const destination = createWriteStream(`${path.dirname(argv[1])}${path.sep}files${path.sep}archive.gz`);
    pipeline(source, gzip, destination, (err) => { if (err) { console.log(err) } });
};

await compress();
import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { argv } from 'node:process';

const write = async () => {
    const filename = `${path.dirname(argv[1])}${path.sep}files${path.sep}fileToWrite.txt`
    const output = createWriteStream(filename);
    process.stdin.on('readable', () => {
        let data;
        while (null != (data = process.stdin.read())) {
            output.write(data)
        }
    });
    process.stdin.on('end', () => {
        output.close();
    });
};

await write();
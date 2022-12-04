import { createReadStream } from 'node:fs';
import path from 'node:path';
import { argv } from 'node:process';

const read = async () => {
    const filename = `${path.dirname(argv[1])}${path.sep}files${path.sep}fileToRead.txt`
    const input = createReadStream(filename);
    input.on('readable', () => {
        let data;
        while (null != (data = input.read())){
            process.stdout.write(data)
        }
    });
};

await read();
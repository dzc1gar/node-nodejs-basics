import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');
import path from 'node:path';
import { argv } from 'node:process';

const calculateHash = async () => {
    const filename = `${path.dirname(argv[1])}${path.sep}files${path.sep}fileToCalculateHashFor.txt`
    const hash = createHash('sha256');
    const input = createReadStream(filename);
    input.on('readable', () => {
        let data;
        while (null !== (data = input.read())) {
            hash.update(data);
        }
    });

    input.on('end', () => {
        console.log(hash.digest('hex'));
      });
    
};

await calculateHash();
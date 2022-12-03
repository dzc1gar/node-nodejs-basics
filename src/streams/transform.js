import { Transform } from 'node:stream';
import os from 'node:os';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
          const str = chunk.toString()
          let newStr = "";
          for (let i = str.length - os.EOL.length -1; i >= 0; i--){
            newStr += str[i]
          }
          newStr += os.EOL
          callback(null, newStr);
        },
      });
    
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
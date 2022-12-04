import { argv } from 'node:process'
import { spawn } from 'node:child_process';
import  path from 'node:path';

const spawnChildProcess = async (args) => {
    const agrsWithScript = [`${path.dirname(argv[1])}${path.sep}files${path.sep}script.js`]
    if (args){
        agrsWithScript.push(...args)
    }
    const childProcess = spawn(argv[0], agrsWithScript);

    childProcess.stdout.pipe(process.stdout)
    process.stdin.pipe(childProcess.stdin)
    
};

spawnChildProcess();
import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';
import { argv } from 'node:process';

const performCalculations = async () => {
    const cpuCnt = os.cpus().length;
    const arr = Array(cpuCnt)
    let finished = 0
    for (let i = 0; i < cpuCnt; i++) {
        const worker = new Worker(`${path.dirname(argv[1])}${path.sep}worker.js`, {
            workerData: i + 10
        });
        worker.on('message', (val) => { arr[i] = { status: 'resolved', data: val } });
        worker.on('error', () => { arr[i] = { status: 'error', data: null } });
        worker.on('exit', () => {
            finished++
            if (finished === cpuCnt){
                console.log(arr)
            }
        });
    }
};

await performCalculations();
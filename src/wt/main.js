import cores from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
    const numberOfCores = cores.cpus().length;
    const n = 10;
    let result = [];
    const workerPromises = [];

    for (let i = 0; i < numberOfCores; i++) {
        const promise = new Promise((resolve) => {
            const worker = new Worker(
                new URL('worker.js', import.meta.url).pathname.substring(1),
                {
                    workerData: {
                        number: n + i
                    }
                }
            );
            worker.on('message', (res) => {
                result[i] = {
                    id: i,
                    status: 'resolved',
                    data: res
                };
                resolve();
            });

            worker.on('error', (err) => {
                result[i] = {
                    id: i,
                    status: 'error',
                    data: null
                };
                resolve();
            });
        });
        workerPromises.push(promise);
    }

    await Promise.all(workerPromises);
    console.log(result);
};

await performCalculations();

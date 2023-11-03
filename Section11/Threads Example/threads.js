const { isMainThread, workerData, Worker } = require("worker_threads");

if(isMainThread){
    console.log(`Main Thread, processor ID: ${process.pid}`);
    console.log(`Main Thread, processor ID: ${process.pid}`);
    new Worker(__filename, {
        workerData: [5, 1, 11, 0]
    });
    new Worker(__filename, {
        workerData: [5, -4, 8, -1]
    });
}else{
    console.log(`Worker, processor ID: ${process.pid}`)
    console.log(`Worker Data: ${workerData} sorted is ${workerData.sort()}`);
}
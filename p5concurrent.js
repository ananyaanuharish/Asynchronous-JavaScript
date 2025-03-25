async function concurrentExecution() {
    console.log('Start');

    const result1 = await new Promise(resolve => setTimeout(() => resolve('Result 1'), 2000));
    console.log(result1);

    const result2 = await new Promise(resolve => setTimeout(() => resolve('Result 2'), 1000));
    console.log(result2);

    console.log('End');
}

concurrentExecution();
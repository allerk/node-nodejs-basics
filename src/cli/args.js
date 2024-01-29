const parseArgs = () => {
    const argvVariables = process.argv.slice(2);
    for (let i = 0; i < argvVariables.length; i += 2) {
        const name = argvVariables[i].slice(2);
        const value = argvVariables[i + 1];

        if (i === argvVariables.length - 2){
            process.stdout.write(`${name} is ${value}`);
        } else {
            process.stdout.write(`${name} is ${value}, `);
        }
    }
};

parseArgs();

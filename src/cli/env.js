const parseEnv = () => {
    const envVariables = process.env;

    const rssVariables = Object.keys(envVariables).filter(k => k.startsWith('RSS_'));

    for (let i = 0; i < rssVariables.length; i++) {
        const name = rssVariables[i];
        const value = envVariables[rssVariables[i]];

        if (i === rssVariables.length - 1){
            process.stdout.write(`${name}=${value}`);
        } else {
            process.stdout.write(`${name}=${value}; `);
        }
    }
};

parseEnv();

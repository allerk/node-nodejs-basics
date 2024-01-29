import {spawn} from "child_process";

const spawnChildProcess = async (args) => {
    const child = spawn(
        'node',
        [new URL('files/script.js', import.meta.url).pathname.substring(1), ...args],
        { stdio: ['pipe', 'pipe', 'ipc']}
    );

    // separate logic for ipc via send method if needed
    child.on('message', (message) => {
        console.log(`Received from child process IPC: ${message}`);
    });

    process.stdin.on('data', (data) => {
        child.stdin.write(data);
    });

    child.stdout.on('data', (data) => {
        process.stdout.write(`Received from child process: ${data}`);
    });

    child.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
        process.exit(code);
    });


};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2", "...", "someArgument3"]);

const { app } = require('./app');
const port = 3333;

app.listen(port, async () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);

    // Optionally run Jest unit tests on startup
    if (process.env.RUN_TESTS === 'true') {
        console.log('Running unit tests...');
        // Run Jest via Node child process (non-blocking for server)
        require('child_process').exec('npm test', (err, stdout, stderr) => {
            if (stdout) process.stdout.write(stdout);
            if (stderr) process.stderr.write(stderr);
            if (err) process.exit(1);
        });
    }
});


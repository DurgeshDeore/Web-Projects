const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Route to execute code
app.post('/execute', (req, res) => {
    const { code, language } = req.body;
    let fileName = '';
    let command = '';

    // Handle different languages
    if (language === 'python') {
        fileName = 'script.py';
        command = `python3 ${fileName}`;
    } else if (language === 'javascript') {
        fileName = 'script.js';
        command = `node ${fileName}`;
    } else if (language === 'c') {
        fileName = 'program.c';
        // Save the code to a .c file
        fs.writeFileSync(fileName, code);
        // Compile and run the C program
        exec(`gcc ${fileName} -o program.out && ./program.out`, (error, stdout, stderr) => {
            if (error) {
                return res.json({ error: stderr });
            }
            res.json({ output: stdout });
        });
        return;
    }

    // Save code to file
    fs.writeFileSync(fileName, code);

    // Execute the code
    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.json({ error: stderr });
        }
        res.json({ output: stdout });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

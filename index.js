const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const currentPath = process.cwd();

function getCurrentDate() {
    const now = new Date();
    return {
        date: now.toISOString().split('T')[0], 
        dayOfYear: Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000),
    };
}

app.get('/files', async function (req, res) {
    try {
        const directory = await fs.promises.readdir(currentPath);
        const files = [];

        for (const element of directory) {
            const stats = await fs.promises.stat(path.join(currentPath, element));
            if (stats.isFile()) {
                files.push({
                    name: element,
                    size: stats.size,
                    lastUpdate: stats.mtime.toISOString(),
                });
            }
        }

        const currentDate = getCurrentDate();
        res.send({
            files,
            currentDate
        });
    } catch (err) {
        res.status(500).send('Erreur lors de la lecture du répertoire');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

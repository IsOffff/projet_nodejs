const express = require('express');
const getCurrentDate = require('./date');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const currentDate = getCurrentDate();
    res.send(`Nous sommes le ${currentDate}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
require('./index');
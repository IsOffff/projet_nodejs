const express = require('express');
const { getCurrentDate } = require('./date');
const { getAppMessage } = require('./app');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const currentDateMessage = getCurrentDate();
    const appMessage = getAppMessage();
    res.send(`${appMessage}<br>${currentDateMessage}`); 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

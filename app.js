const express = require('express');
const winston = require('winston');
const dbConnection = require('./dbConnection')
const router = require('./Routes/CRUDRoutes')

const app = express();

app.use('/', router);

// Configure winston
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
    ],
});

const port = 8000;

app.listen(port, () => {
    logger.info(`App is running at port ${port}`);
});

module.exports = logger;
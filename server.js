const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const moment = require('moment');

const endpointRead = require('./routes/endpointRead');
const endpointCreate = require('./routes/endpointCreate');
const endpointSearch = require('./routes/endpointSearch');
const endpointUpdate = require('./routes/endpointUpdate');
const endpointDelete = require('./routes/endpointDelete');

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`);
    next();
};

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/viewUsers', endpointRead);
app.use('/addUsers', endpointCreate);
app.use('/searchUsers', endpointSearch);
app.use('/updateUsers', endpointUpdate);
app.use('/deleteUsers', endpointDelete);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});

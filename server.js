const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const endpointRead = require('./routes/endpointRead');
const endpointCreate = require('./routes/endpointCreate');
const endpointSearch = require('./routes/endpointSearch');
const endpointUpdate = require('./routes/endpointUpdate');
const endpointDelete = require('./routes/endpointDelete');

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
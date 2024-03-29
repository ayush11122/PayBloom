const express = require('express');
const app = express();
const mainRouter = require('./routes/index');

const Cors = require('Cors')

app.use(Cors());
app.use(express.json());

app.use("api/v1", mainRouter);

app.listen(3000);
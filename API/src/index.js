const express = require('express');
const Cors = require('cors');
const router = require('./routes/routes');
const PORT = process.env.PORT || 3002

const app = express();

app.use(Cors());
app.use(express.json());

app.use("/api/v1", router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});
const express = require("express");
const app = express();
const morgan = require('morgan')


app.use(express.json());
app.use(morgan('dev'))


app.use("/bounty", require('./routes/bountyRouter.js'))

app.listen(9000, () => {
    console.log("The server is running on Port 9000");
})

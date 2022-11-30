const express =  require('express')
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const userRouter = require('./scr/route/UserRouter')

app.use(bodyParser.json())
app.use('/users', userRouter);



app.listen(port ,()=>console.log(`Starting this is port ${port}`));




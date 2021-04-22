const dotenv = require('dotenv')
dotenv.config({path : './config.env'})
const express = require('express')
const router = require('./src/routes/router')
const app = express()
const PORT = process.env.PORT
require('./connect')




app.use(express.json())
app.use('/', router)




app.listen(PORT, () => {
     console.log(`server is running on port ${PORT} success`);
});

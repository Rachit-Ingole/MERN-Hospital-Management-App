const express = require('express')
const app = express()
require('dotenv').config();
const connectDB = require('./db/connect')
const port = process.env.PORT || 3000
const patients = require('./routes/patients')
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json())
app.use('/api/v1/patients', patients)

app.use(notFound);
app.use(errorHandlerMiddleware);    

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
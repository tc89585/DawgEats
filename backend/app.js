/*mongodb+srv://groupEweb:<password>@dawgeats.o982vrf.mongodb.net/?retryWrites=true&w=majority*/
const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/', (request, response) => {
  response.send('hey');
});

const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

/* 
    app.get('/', (request, response) => {
    response.send('hey');
    });
*/

/*Connect to database*/
const CONNECTION_STRING =
  'mongodb+srv://groupEweb:CprddcWV5VDYpakX@dawgeats.o982vrf.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port);
    console.log('Mongo DB connection successful');
  })
  .catch((error) => {
    console.log(`Error in DB connection ${error}`);
  });

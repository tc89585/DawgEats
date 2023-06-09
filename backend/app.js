const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3001;
const dotenv = require('dotenv');
dotenv.config();
const users = require('./routes/api/users');
app.use('/api/users', users);

const Restaurant = require('./routes/api/restaurants');

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));
app.use('/api/restaurants', Restaurant);

/*Connect to database*/
const CONNECTION_STRING = `mongodb+srv://groupEweb:${process.env.DB_PASSWORD}@dawgeats.o982vrf.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
mongoose
  .connect(CONNECTION_STRING, {
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


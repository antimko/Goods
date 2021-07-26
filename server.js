require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT;

// MiddleWare
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// prisijungimas prie duomenu bazes
mongoose
  .connect(process.env.MONGO_CONNECT_STIRNG, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Mongoose is connected, congrats!!!');
  })
  .catch((err) => console.error(err.message));

app.listen(PORT, console.log(`Server is running on port ${PORT}`));

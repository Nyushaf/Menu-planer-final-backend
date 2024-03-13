const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./WeekRoutes');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();
mongoose.set('strictQuery', false);

const PORT = 4000 || process.env.port;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We are connected to MONGO'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Running port ${PORT}`)
})
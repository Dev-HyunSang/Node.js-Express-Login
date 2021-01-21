const express = require('express');

require('dotenv').config();
const home = require('./src/routes/home');
const app = express();

app.set('views', "./src/views");
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/pulibc`));
app.use("/", home);
app.use('/login', home);

app.listen(process.env.SREVER_PORT, () => {
    console.log('Running on Server / http://localhost:3000');
});
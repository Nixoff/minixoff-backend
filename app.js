const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/config');
const cors = require('cors')


// HABILITANDO CORS

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// HABILITANDO CORS

const url = config.bd_string;
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!')
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
})

// PARSER
app.use(express.json());

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');
const shortnerRoute = require('./Routes/shortner');

app.use('/', indexRoute);
app.use('/users', usersRoute);
app.use('/shortner', shortnerRoute);


app.listen(3000);

module.exports = app;
const express = require('express');
const mongoose = require('mongoose'); //pra acessar o banco de dados

const routes = require('./routes');
//cria servidor / express é um servidor de rotas
const server = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-ejmtz.mongodb.net/omnistack8?retryWrites=true&w=majority' , 
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
);

server.use(express.json());
server.use(routes);
 
//porta
server.listen(3333);
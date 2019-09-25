const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

//GET(buscar), POST(criar), PUT(editar), DELETE(deletar)
routes.get('/', (requisicao, resposta) => {
    var a = requisicao.query.name;
    //return resposta.send(`Hello ${a}`);
    return resposta.json(
        {
            message:`Olá ${a}`
        }
    )
});

routes.post('/devs', DevController.store);

module.exports = routes;
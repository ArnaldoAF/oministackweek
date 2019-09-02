const express = require('express');
//cria servidor / express é um servidor de rotas
const server = express();

//GET(buscar), POST(criar), PUT(editar), DELETE(deletar)
server.get('/', (requisicao, resposta) => {
    var a = requisicao.query.name;
    //return resposta.send(`Hello ${a}`);
    return resposta.json(
        {
            message:`Olá ${a}`
        }
    )
});
//porta
server.listen(3333);
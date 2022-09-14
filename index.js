/**
 * Arquivo: index.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação através do Express.Js.
 * Author: Ingrid Carvalho
 * Data de Criação: 13/09/2022
 */

// ====  Configuração básica da Aplicação ==== //

const express = require('express');
const server = express();
server.use(express.json());


// Porta de execução do servidor 
server.listen(3000);


// Array da aplicação 
let films = [];


// ======== Rotas da Aplicação =========//

//  CREATE - CRIAR um novo filme
server.post('/films', checkIfFilmExits, (req, res) => {
    let { name } = req.body;
    films.push(name);
    return res.json(films);
});

// READ -  LER todos os filmes do array
server.get('/films', (req, res) => {
    return res.json(films);
});

// READ - LER um filme específico do array
server.get('/films/:index', checkFilmInArray, (req, res) => {
    let { index } = req.params;
    return res.json(films[index]);
});



//Função para checar se o filme existe no array
function checkFilmInArray(req, res, next) {
    if (!films[req.params.index]) {
        return res.status(400).json({ error: 'Filme não existe!' });
    }
    return next();
};

//Função para checar se o filme foi informado 
function checkIfFilmExits(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: 'É necessário um nome!' });
    };
    return next();
};

// UPDATE - ATUALIZAR filme específico do array
server.put('/films/:index', (req, res) => {
    let { index } = req.params;
    let { name } = req.body;
    films[index] = name;
    return res.json(films);
});


//DELETE - DELETAR filme específico do array
server.delete('/films/:index', (req, res) => {
    let { index } = req.params;
    films.splice(index, 1);
    return res.json({ message: "Filme deletado com sucesso!" });
    // Retornar uma mensagem de sucesso
});


// para acessar
// hppt://localhost:3000/users
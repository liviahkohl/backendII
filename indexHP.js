import express from 'express';
import { buscarPer, buscarPerPorId, buscarPerPorNome } from "./servico/servico.js";

const app = express();

app.get('/personagensHP', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarPerPorNome(nomePer) : buscarPer();

    if(resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhum personagem encontrado"});
    }
})

app.get('/personagensHP/:idPer', (req, res) => {
    const idPer = req.params.iduf;
    const Per = buscarPerPorId(req.params.iduf);
    

    if (Per) {
        res.json(Per);
    } else if (isNaN(parseInt(idPer))) {
        res.status(400).send({ "erro": "Requisição inválida"});
    } else {
        res.status(404).send({ "erro": "Personagem não encontrado"});
    }
});

app.listen(8080, () => {
    let data = new Date()
    console.log('Servidor iniciado na porta 8080 em: ' + data)
});    
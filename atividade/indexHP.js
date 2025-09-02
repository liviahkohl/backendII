import personagens_HP from "./dados.js";
import express from 'express';

const app = express();

app.get('/hpPer', (req, res) => {
    res.json(personagens_HP)
})

app.get('/hpPer/:idHp', (req, res) => {
    const idHp = parseInt(req.params.idHp)
    let mensagemErro = '';
    let hp;

    if (!(isNaN(idHp))) {
        hp = personagens_HP.find((hp) => hp.id === idHp);
        if (!idHp) {
            mensagemErro = 'Personagem não encontrado';
        } else {
            mensagemErro = 'Entrada inválida'
        }

        if (hp) {
            res.json(hp)
        } else {
            res.status(404).json({ "erro": mensagemErro })
        }
    }
})

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data)
})
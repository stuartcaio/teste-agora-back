const express = require('express');
const app = express();
const porta = 8080;
const cors = require('cors');

app.use(cors());

const objeto = [
    {
        id: 1,
        nome: 'Caio'
    }
]

app.get('/jogadoresAPI', (req, res) => {
    let jogadores = [];

    for(i = 0; i < 12; i++){
        jogadores.push(i);

        if(jogadores.length == 12){
            const jogadoresAleatorios = jogadores.sort(() => Math.random() - 0.55);

            res.status(200).send(jogadores);

            console.log(jogadoresAleatorios)
        }
    }
});

app.listen(porta, () => {
    console.log(`Rodando na porta ${porta}.`);
});
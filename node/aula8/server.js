const express = require('express');
const app = express();

// http://qualquersite/profiles/1234?
// campanha=googleads &
// nome_campanha=seila

app.use(express.urlencoded({extend: true}));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"> <br>
    Outro campo: <input type="text" name="outrocampo">
    <button>Enviar</button>
    </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  // /profile/3
  // /profiles/?chave1=valor1&chave2=valor2&chave3=valor&...
  // 
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`)
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
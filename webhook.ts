import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  const body = req.body;

  // Faça algo com os dados do webhook aqui
  console.log('Recebido um webhook:', body);

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
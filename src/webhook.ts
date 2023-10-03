import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rota para receber as solicitações do webhook
app.post('/webhook', (req, res) => {
  const payload = req.body; // O corpo da solicitação contém os dados do webhook
  console.log('Recebido um webhook:', payload);
  // Realize as ações desejadas com os dados recebidos aqui
  res.status(200).end(); // Responda com um status de sucesso
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
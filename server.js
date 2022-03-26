const express = require('express');
const router = express.Router();
const app = express();

const PORT =  3000

app.use(router.get('/', async (req, res, err) => {
  try {
    res.json("ey")
  } catch(error) {
      console.log(error)
    }
}))

const server = app.listen(PORT, () => {
  console.log(`El servidor en :${PORT} está funcionando correctamente.`);
});

server.on('error', error => console.log(`Error en el servidor ${error}.`));
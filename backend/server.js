
require('dotenv').config();


const express = require('express');
const cors = require('cors');
const path = require("path");


const { getGitHubData } = require("./apis/githubapi");



const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));



app.get('/api/github', async (req, res) => {
  try {
    const data = await getGitHubData();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al consultar la API de GitHub' });
  }
});



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

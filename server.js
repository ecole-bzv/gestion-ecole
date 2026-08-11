const express = require('express');
const {Pool} = require ('pg');
const cors = require ('cors');

const app = express();
app.use ( cors()) ;
app.use (express.json());
app.use(express.static( 'public'));

const poo = new Pool({ 
  connectionStrin: process.even.DATABASE_URL,
  ssl: rejectUnauthorized: false}
});

pool.query REATE TABLE IF NOT EXISTS etudiants ( 
  id SERIAL PRIMARY KEY,
  nom VARCHAR (100),
  prnom VARCHAR (100),
  created_at TIMESTAMP DEFAULT NOW()
)`);

app.get('/api/etudiants' , async (req, res) => 
  const result = await pool.quey ('SELECT *FROM etudiants ORDER BY id DESC');
  res.json result.rows);
});

app.get('/api/etudiants' , async (req, res) =>
  const nom, prenom = req.body;
  const result = await pool.quey (
  'INNER INTO etudiants(nom, prenom) VALUES ($1 , $2) RETURNING *',
  [nom, prenom]
);
res.json(result.row[0]);
});

const PORT = process.even.PORT || 10000;
app.listen(PORT, () => console.log(`server running on ${PORT}));

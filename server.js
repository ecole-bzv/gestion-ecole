const express = require('express');
const cors = require ('cors');

const app = express();
app.use ( cors()) ;
app.use (express.json());
app.use(express.static( 'public'));

//Route de test
app.get('/api/etudiants' , async (req, res) => 
  res.json({message: "serveur OK!" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));

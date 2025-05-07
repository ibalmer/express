import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('<a href="http://localhost:3007/users">Lista de Usuarios</a>');
});

app.get('/users', (req, res) => {
  res.status(200).send('Hola!');
  fs.readFile('./users.json', 'utf8', (err, data) => {
      if (err) {
          res.status(500).send('Error al leer los usuarios');
      } else {
          const usuarios = JSON.parse(data); 
          res.status(200).json(usuarios); 
      }
  });
});

app.post('/users', (req, res) => {
  const nuevoUsuario = req.body;
  user.push(nuevoUsuario); 

  fs.writeFile('./users.json', JSON.stringify(user, null, 2), (err) => {
    if (err) {
      res.status(500).send('Error al guardar el usuario');
    } else {
      res.status(201).send('Usuario agregado exitosamente');
    }
  });
});

app.listen(3007, () => {
  console.log('Servidor corriendo en el puerto http://localhost:3007');
});

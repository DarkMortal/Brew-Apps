require('dotenv').config();
const express = require('express');
const app = express();
const dbFunctions = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  dbFunctions.getAllBooks()
  .then(data => res.json(data))
  .catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.get('/data', (req, res) => {
  dbFunctions.getBookData(req.query.id)
  .then(data => res.json(data))
  .catch(err => {
      console.error(err);
      res.sendStatus(500);
  });
});

app.put('/create', (req, res) => {
  dbFunctions.createBook(req.body)
  .then(() => res.sendStatus(200))
  .catch(err => {
      let actualError = JSON.parse(JSON.stringify(err));
      if (actualError.code == 'P2002')
        res.status(403).send("Id already exists");
      else{
        res.sendStatus(500);
        console.error(err);
      }
  });
});

app.put('/update', (req, res) => {
  dbFunctions.updateBook(req.query.id, req.body)
  .then(data => res.json(data))
  .catch(err => {
    let actualError = JSON.parse(JSON.stringify(err));
    if (actualError.code == 'P2025')
      res.status(404).send("Record not found");
    else {
      res.sendStatus(500);
      console.error(err);
    }
  });
});

app.delete('/delete', (req, res) => {
  dbFunctions.deleteBook(req.query.id)
  .then(() => res.sendStatus(200))
  .catch(err => {
    let actualError = JSON.parse(JSON.stringify(err));
    if (actualError.code == 'P2025')
      res.status(404).send("Record not found");
    else {
      res.sendStatus(500);
      console.error(err);
    }
  });
});

app.listen(PORT, () => console.info(`App running on port ${PORT}`));
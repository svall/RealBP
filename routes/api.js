const express = require('express');
const router = express.Router();

const { addRecibo, getAllRecibos } = require('../model/recibos');

// router.get('/', (req, res) => {
//   // res.json(res.topics || []);
//   console.log('rendering');
//   res.render(`<h1>'Hiiiii'</h1>`);
// });

router.get('/resumen/recibos', getAllRecibos, (req, res) => {
  res.json(res.recibos || []);
  // console.log('in router ', res.recibos);
});

router.post('/recibonuevo', addRecibo, (req, res) => {
  res.json(res.recibo || []);
  // console.log('route add recibo ', res.recibo);
});

module.exports = router;

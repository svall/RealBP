const db = require('../lib/dbConnect');

function addRecibo(req, res, next) {
  db.none(`
    INSERT INTO recibos (propiedad, numapt, numrecibo, nombre, periodoini, periodofin, arriendo, admon, rfte, parking, externo, amoblado, comision, otroarr, observaciones, efect, consigna, cheque, transfer, otropago, valormes, selnuevo, totrecibo, totpago, comisamob, amobselect, comissegur, segselect)
    VALUES ($/propiedad/, $/numapt/, $/numrecibo/, $/nombre/, $/periodoini/, $/periodofin/, $/arriendo/, $/admon/, $/rfte/, $/parking/, $/externo/, $/amoblado/, $/comision/, $/otroarr/, $/observaciones/, $/efect/, $/consigna/, $/cheque/, $/transfer/, $/otropago/, $/valormes/, $/selnuevo/, $/totrecibo/, $/totpago/, $/comisamob/, $/amobselect/, $/comissegur/, $/segselect/)
    ;`, req.body)
  .then(() => {
    // console.log('model ', req.body);
    next();
  })
}

//   db.none(`
//     INSERT INTO recibos (propiedad, numapt, numrecibo, nombre)
//     VALUES ($/propiedad/, $/numapt/, $/numrecibo/, $/nombre/)
//     ;`, req.body)
//   .then(() => {
//     console.log('model ', req.body.numapt);
//     next();
//   })
// }

function getAllRecibos(req, res, next) {
  db.any(`
    SELECT *
    FROM recibos;
  `)
  .then((recibos) => {
    res.recibos = recibos;
    // console.log('in model ', req.recibos);
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  addRecibo,
  getAllRecibos,
}

const db = require('../lib/dbConnect');

function addRecibo(req, res, next) {
  db.none(`
    INSERT INTO recibos (propiedad, numapt, numrecibo, nombre, periodoini, periodofin, arriendo, admon, rfte, parking, externo, amoblado, comision, otroarr, observaciones, efect, consigna, cheque, transfer, otropago, valormes, selnuevo, totrecibo, totpago, comisamob, amobselect, comissegur, segselect)
    VALUES ($/propiedad/, $/numapt/, $/numrecibo/, $/nombre/, $/periodoini/, $/periodofin/, $/arriendo/, $/admon/, $/rfte/, $/parking/, $/externo/, $/amoblado/, $/comision/, $/otroarr/, $/observaciones/, $/efect/, $/consigna/, $/cheque/, $/transfer/, $/otropago/, $/valormes/, $/selnuevo/, $/totrecibo/, $/totpago/, $/comisamob/, $/amobselect/, $/comissegur/, $/segselect/)
    ;`, req.body)
  .then(() => {
    console.log('model ', req.body);
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

module.exports = {
  addRecibo,
}

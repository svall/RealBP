const db = require('../lib/dbConnect');

function addRecibo(req, res, next) {
  db.none(`
    INSERT INTO recibos (propiedad, numapt, numrecibo)
    VALUES ($/propiedad/, $/numapt/, $/numrecibo/)
    ;`, req.body)
  .then(() => {
    console.log('model ', req.body);
    next();
  })
}

module.exports = {
  addRecibo,
}

BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS recibos;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  password VARCHAR NOT NULL
);

CREATE TABLE recibos (
  id SERIAL PRIMARY KEY,
  propiedad VARCHAR NOT NULL,
  numero VARCHAR,
  recibo INT NOT NULL,
  nombre VARCHAR,
  periodo VARCHAR NOT NULL,
  arriendo INT,
  admon INT,
  rfte INT,
  rftevalor INT,
  parking INT,
  externo INT,
  amoblado INT,
  comision INT,
  otrosarr INT,
  observaciones VARCHAR,
  totrecibo INT,
  efectivo INT,
  consignacion INT,
  cheque INT,
  transfer INT,
  otrospago INT,
  totpago INT,
  contrnuevo VARCHAR,
  arrmes INT,
  amoblado VARCHAR,
  avalcrear VARCHAR,
  TIMESTAMP
);

COMMIT;

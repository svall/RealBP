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
  numapt VARCHAR,
  numrecibo INT NOT NULL,
  nombre VARCHAR,
  periodoini VARCHAR,
  periodofin VARCHAR,
  arriendo INT,
  admon INT,
  rfte INT,
  parking INT,
  externo INT,
  amoblado INT,
  comision INT,
  otroarr INT,
  observaciones VARCHAR,
  totrecibo INT,
  efect INT,
  consigna INT,
  cheque INT,
  transfer INT,
  otropago INT,
  valormes INT,
  selnuevo VARCHAR,
  totpago INT,
  comisamob INT,
  amobselect VARCHAR,
  comissegur INT,
  segselect VARCHAR,
  entrada_fecha TIMESTAMP DEFAULT current_timestamp
);

COMMIT;

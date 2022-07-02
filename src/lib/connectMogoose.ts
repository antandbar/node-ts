'use strict';

import mongoose from 'mongoose';

const dbMongodbConnection = () => {
  // en caso de error en la conexión
  mongoose.connection.on('error', (err: any) => {
    console.log('Error de conexión a MongoDB', err);
    process.exit(1);
  });

  // evento al conectar primea vez la BBDD
  mongoose.connection.once('open', async() => {
    console.log('Conectado a MongoDB en la BD:', mongoose.connection.name);
  });

  mongoose.connect((process.env.URI!), {
    useNewUrlParser: true,
  } as mongoose.ConnectOptions);
};

export  {
  dbMongodbConnection,
};

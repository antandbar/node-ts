'use strict';

import { Sequelize } from 'sequelize';

const db = new Sequelize(
  (process.env.NODE_ENV as string) === 'test'?(process.env.POSTGRESQL_DATABASE_TEST as string):(process.env.POSTGRESQL_DATABASE as string),
  (process.env.NODE_ENV as string) === 'test'?(process.env.POSTGRESQL_USER_TEST as string):(process.env.POSTGRESQL_USER as string),
  (process.env.NODE_ENV as string) === 'test'?(process.env.POSTGRESQL_PASSWORD_TEST as string):(process.env.POSTGRESQL_PASSWORD as string),
  {
    host: (process.env.NODE_ENV as string) === 'test'?(process.env.POSTGRESQL_HOST_TEST as string):(process.env.POSTGRESQL_HOST as string),
    dialect: 'postgres',
    // logging: false
  },
);

const dbPostgresqlConnection = async (): Promise<void> => {
  try {
    await db.authenticate();
    console.log('Database postgresql online');

    // Se sincroniza el modelo
    await db.sync({alter: true});
    
  } catch (error: any) {
    throw new Error(error);
  }
};

export  {
  db,
  dbPostgresqlConnection,
};

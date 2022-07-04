'use strict';

import { Sequelize } from 'sequelize'

const db = new Sequelize(
  process.env.NODE_ENV! === 'test'?process.env.POSTGRESQL_DATABASE_TEST!:process.env.POSTGRESQL_DATABASE!,
  process.env.NODE_ENV! === 'test'?process.env.POSTGRESQL_USER_TEST!:process.env.POSTGRESQL_USER!,
  process.env.NODE_ENV! === 'test'?process.env.POSTGRESQL_PASSWORD_TEST!:process.env.POSTGRESQL_PASSWORD!,
  {
    host: process.env.NODE_ENV! === 'test'?process.env.POSTGRESQL_HOST_TEST!:process.env.POSTGRESQL_HOST!,
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
}

export  {
  db,
  dbPostgresqlConnection,
};

'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbPostgresqlConnection = exports.db = void 0;
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(process.env.POSTGRESQL_DATABASE, process.env.POSTGRESQL_USER, process.env.POSTGRESQL_PASSWORD, {
    host: process.env.POSTGRESQL_HOST,
    dialect: 'postgres',
    // logging: false
});
exports.db = db;
const dbPostgresqlConnection = async () => {
    try {
        await db.authenticate();
        console.log('Database postgresql online');
        // Se sincroniza el modelo
        await db.sync({ alter: true });
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.dbPostgresqlConnection = dbPostgresqlConnection;

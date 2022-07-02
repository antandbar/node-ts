'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class PostSchema extends sequelize_1.Model {
}
PostSchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    body: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false,
    sequelize: connectPostgresql_1.db,
    modelName: 'post',
});
exports.default = PostSchema;

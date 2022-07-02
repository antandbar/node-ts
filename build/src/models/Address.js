'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class AddressSchema extends sequelize_1.Model {
}
AddressSchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    street: {
        type: sequelize_1.DataTypes.STRING
    },
    city: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false,
    sequelize: connectPostgresql_1.db,
    modelName: 'address',
});
exports.default = AddressSchema;

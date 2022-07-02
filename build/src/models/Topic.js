'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class TopicSchema extends sequelize_1.Model {
}
TopicSchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    text: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
}, {
    timestamps: false,
    sequelize: connectPostgresql_1.db,
    modelName: 'topic',
});
exports.default = TopicSchema;

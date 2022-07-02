"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Topic_1 = __importDefault(require("./Topic"));
const Address_1 = __importDefault(require("./Address"));
const Post_1 = __importDefault(require("./Post"));
class Associations {
    relations() {
        // Uno a uno
        //Añadir una clave foranea a la tabla adresses
        Topic_1.default.hasOne(Address_1.default, { foreignKey: 'topicId' });
        //Añade una clave topicId a la tabla adresses
        Address_1.default.belongsTo(Topic_1.default, { foreignKey: 'topicId' });
        //Uno a N
        // Topic va a tener mucho post
        // Se añade una clave topicId a la tabla posts
        Topic_1.default.hasMany(Post_1.default, { foreignKey: 'topicId' });
        // Se añade una clave topicId a la tabla posts
        Post_1.default.belongsTo(Topic_1.default, { foreignKey: 'topicId' });
    }
}
exports.default = new Associations();

'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbMongodbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbMongodbConnection = () => {
    // en caso de error en la conexión
    mongoose_1.default.connection.on('error', (err) => {
        console.log('Error de conexión a MongoDB', err);
        process.exit(1);
    });
    // evento al conectar primea vez la BBDD
    mongoose_1.default.connection.once('open', async () => {
        console.log('Conectado a MongoDB en la BD:', mongoose_1.default.connection.name);
    });
    /*   mongoose.connect((process.env.URI!), {
        useNewUrlParser: true,
      } as mongoose.ConnectOptions);
    }; */
    mongoose_1.default.connect((process.env.NODE_ENV) === 'test'
        ? (process.env.URI_TEST)
        : (process.env.URI), {
        useNewUrlParser: true,
    });
};
exports.dbMongodbConnection = dbMongodbConnection;

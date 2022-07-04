'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const http_errors_1 = __importDefault(require("http-errors"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const connectMogoose_1 = require("./lib/connectMogoose");
const connectPostgresql_1 = require("./lib/connectPostgresql");
const Associations_1 = __importDefault(require("./models/Associations"));
// Routes
const books_1 = __importDefault(require("./routes/books"));
const topics_1 = __importDefault(require("./routes/topics"));
// Inicializaciones
const app = (0, express_1.default)();
(async () => {
    try {
        await (0, connectPostgresql_1.dbPostgresqlConnection)();
    }
    catch (err) {
        throw new Error(err);
    }
})();
Associations_1.default.relations();
(0, connectMogoose_1.dbMongodbConnection)();
//Configuracionesa
app.set('port', (process.env.NODE_ENV) === 'test' ? 3001 : process.env.PORT || 3000);
// Middelwares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use('/apiv1/books', books_1.default);
app.use('/apiv1/topics', topics_1.default);
// Estaticos
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Arrancar el servidor
exports.server = app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // error
    res.status(err.status || 500);
    /* res.json('error'); */
    res.json({ error: err.message });
});
exports.default = app;

'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.topicsController = void 0;
const topicsBo_1 = require("../bos/topicsBo");
class TopicsController {
    getTopics(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const topic = yield topicsBo_1.topicsBo.getTopics();
            res.status(200).json({ results: topic });
        });
    }
    saveTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text } = req.body;
            const topic = yield topicsBo_1.topicsBo.saveTopic(text);
            res.status(201).json({ result: topic });
        });
    }
}
exports.topicsController = new TopicsController();

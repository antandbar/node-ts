'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.topicsController = void 0;
const topicsBo_1 = require("../bos/topicsBo");
class TopicsController {
    async getTopics(req, res) {
        const topic = await topicsBo_1.topicsBo.getTopics();
        res.status(200).json({ results: topic });
    }
    async saveTopic(req, res) {
        const { text } = req.body;
        const topic = await topicsBo_1.topicsBo.saveTopic(text);
        res.status(201).json({ result: topic });
    }
}
exports.topicsController = new TopicsController();

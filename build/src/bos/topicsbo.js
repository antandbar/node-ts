'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.topicsBo = void 0;
const Topic_1 = __importDefault(require("../models/Topic"));
class TopicsBo {
    async getTopics() {
        const topics = await Topic_1.default.findAll();
        return topics;
    }
    async saveTopic(text) {
        const topic = await Topic_1.default.create({ text: text });
        return topic;
    }
}
exports.topicsBo = new TopicsBo();

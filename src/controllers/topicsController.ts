'use strict';

import { Request, Response, NextFunction } from 'express';
import { Topic } from '../models/Topic';
import { topicsBo } from '../bos/topicsBo';

class TopicsController {
  public async getTopics(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const topic: Topic[] = await topicsBo.getTopics();
      res.status(200).json({ results: topic });
    } catch (err) {
      next(err);
    }
  }

  public async saveTopic(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { text } = req.body;

      const topic: Topic = await topicsBo.saveTopic(text);
      res.status(201).json({ result: topic });
    } catch (err) {
      next(err);
    }
  }
}

export const topicsController = new TopicsController();

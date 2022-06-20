'use strict';

import { Request, Response } from 'express';
import TopicSchema, { Topic } from '../models/Topic';

class TopicsController {
  public async getTopic(req: Request, res: Response): Promise<void> {
    const topic: Topic[] = await TopicSchema.findAll();
    res.status(200).json({ results: topic });
  }

  public async saveTopic(req: Request, res: Response): Promise<void> {
    const { text } = req.body;

    const topic: Topic = await TopicSchema.create({text:text});
    res.status(201).json({ result: topic });
  }
}

export const topicsController = new TopicsController();

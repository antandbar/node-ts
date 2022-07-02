'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface Topic {
  id?: number;
  text: string;
}

class TopicSchema extends Model<Topic> implements Topic {
  id!: number;
  text!: string;
}

TopicSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'topic',
  },
);

export default TopicSchema;

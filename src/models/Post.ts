'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface Post {
  id?: number;
  title: string;
  body: string;
}

class PostSchema extends Model<Post> implements Post {
  id!: number;
  title!: string;
  body!: string;
}

PostSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'post',
  },
);

export default PostSchema;
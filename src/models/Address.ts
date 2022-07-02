'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface Address {
  id?: number;
  street: string;
  city: string;
}

class AddressSchema extends Model<Address> implements Address {
  id!: number;
  street!: string;
  city!: string;
}

AddressSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    street: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'address',
  },
);

export default AddressSchema;
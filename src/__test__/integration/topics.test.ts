'use strict';

import 'dotenv/config';
import request from 'supertest';
import app, { server } from '../../index';
import mongoose from 'mongoose';

describe('testing Books', () => {
  describe('GET /apiv1/topics', () => {
    it('must check the topics have the results property and status 200', async () => {
      try {
        expect.assertions(2);
        const response = await request(app).get('/apiv1/topics');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('results');
      } catch (err) {
        console.log(err);
      }
    });
  });
});

afterAll(() => {
  try {
    mongoose.connection.close();
    server.close();
  } catch (err) {
    console.log(err);
  }
});

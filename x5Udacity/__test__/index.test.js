const request = require('supertest');
const express = require('express');
const app = require('../src/server/index'); // Assuming your server file is named `index.js`.

describe('Server Endpoints', () => {
  it('should get the root endpoint', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
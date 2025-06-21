const request = require('supertest');
const { createApp } = require('./index');

describe('Express App', () => {
  let app;

  beforeEach(() => {
    app = createApp();
  });

  describe('GET /', () => {
    it('should return "Hello world."', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.text).toBe('Hello world.');
    });
  });
});
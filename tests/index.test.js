const request = require('supertest');
const { createApp } = require('../app/index');

describe('Express App', () => {
  let app;

  beforeEach(() => {
    app = createApp();
  });

  describe('GET /', () => {
    it('should return HTML with "Hello world." and current time', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.text).toContain('Hello world.');
      expect(response.text).toContain('<h1>Hello world.</h1>');
      expect(response.text).toContain('<title>Welcome</title>');
      expect(response.text).toContain('Current time:');
    });
  });
});
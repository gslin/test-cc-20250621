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
      expect(response.text).toContain('<h1 class=');
      expect(response.text).toContain('Hello world.');
      expect(response.text).toContain('<title>Welcome</title>');
      expect(response.text).toContain('Current time:');
    });
  });

  describe('GET /nonexistent', () => {
    it('should return 404 status and custom 404 page', async () => {
      const response = await request(app)
        .get('/nonexistent')
        .expect(404);

      expect(response.text).toContain('404');
      expect(response.text).toContain('Page Not Found');
      expect(response.text).toContain('The page you are looking for does not exist.');
      expect(response.text).toContain('Go Home');
    });
  });
});
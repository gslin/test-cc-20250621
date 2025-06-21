const express = require('express');

function createApp() {
  const app = express();
  
  app.get('/', (req, res) => {
    res.send('Hello world.');
  });
  
  return app;
}

if (require.main === module) {
  const app = createApp();
  const port = process.env.PORT || 3000;
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = { createApp };
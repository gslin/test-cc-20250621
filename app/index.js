const express = require('express');

function createApp() {
  const app = express();
  
  app.set('view engine', 'ejs');
  app.set('views', './views');
  app.use(express.static('public'));
  
  app.get('/', (req, res) => {
    res.render('index', { 
      title: 'Welcome', 
      message: 'Hello world.',
      currentTime: new Date().toLocaleString()
    });
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
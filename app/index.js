const express = require('express');
const morgan = require('morgan');
const minifyHTML = require('express-minify-html');
const compression = require('compression');

function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.use(compression());

  app.set('view engine', 'ejs');
  app.set('views', './views');
  app.use(express.static('public'));

  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('combined'));
  }

  app.use(minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      minifyJS: true,
      minifyCSS: true
    }
  }));

  app.get('/', (req, res) => {
    res.render('index', {
      title: 'Welcome',
      message: 'Hello world.',
      currentTime: new Date().toLocaleString()
    });
  });

  app.use((req, res) => {
    res.status(404).render('404');
  });

  return app;
}

if (require.main === module) {
  const app = createApp();
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = { createApp };
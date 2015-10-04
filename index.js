require('./node_modules/harmonize')();

var Metalsmith = require('./node_modules/metalsmith'),
    drafts     = require('./node_modules/metalsmith-drafts'),
    less       = require('./node_modules/metalsmith-less'),
    layouts    = require('./node_modules/metalsmith-layouts'),
    markdown   = require('./node_modules/metalsmith-markdown');

Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .use(drafts())
  .use(markdown())
  .use(less())
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .build(function(err) {
    if (err) throw err;
  });

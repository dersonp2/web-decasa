const express = require('express');

const app = express();

app.use(express.static('./dist/web-decasa'));

app.get('/*', function(req, res) {
  res.sendFile('/index.html', {root: 'dist/web-decasa/'}
);
});

app.listen(process.env.PORT || 8080);

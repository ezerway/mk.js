var express = require('express'),
    app = express();
app.configure(function () {
  app.use(express.static(__dirname + '/game'));
});
module.exports = app;

var  path = require('path');
var  express = require('express');

var  czFlashApp = express();

var  staticPath = path.resolve(__dirname, 'dist');
czFlashApp.use(express.static(staticPath));

czFlashApp.listen(3000, function() {
  console.log('listening');
});

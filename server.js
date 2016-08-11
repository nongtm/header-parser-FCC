var express = require('express');
var app = express();

var ip = require("ip");
const os = require('os');
const osname = require('os-name')
var getos = require('getos')
var platform = require('platform');

app.get('/', function (req, res) {
    var myIP = ip.address();

  var obj = {
    "ipaddress": myIP,
    "language": req.headers['accept-language'].split(',')[0],
    "software": osname(os.platform(),os.release())
  }
  res.send(obj);
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 3000!');
});

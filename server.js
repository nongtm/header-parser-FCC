var express = require('express');
var app = express();

var ip = require("ip");
const os = require('os');
const osname = require('os-name')
var getos = require('getos')
var platform = require('platform');

var locale = require('browser-locale')
var language = require('browser-language');

app.get('/', function (req, res) {
    var myIP = ip.address();
    
    getos(function(e,os) {
  if(e) return console.log(e)
  console.log("Your OS is:" +JSON.stringify(os)  )
})
  var obj = {
    "ipaddress": myIP,
    "language": req.headers['accept-language'].split(',')[0],
    "software": osname(os.platform(),os.release())
  }
  res.send(obj);
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});

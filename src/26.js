// 项目名称：ProjectIdeas
// 运行环境：Node.js

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);

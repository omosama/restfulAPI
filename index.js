var lists = require('./lists')
var app = require('express')();

var bodyParser = require('body-parser');

var port = process.env.PORT || 7777;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/lists', function (req, res) {
    res.json(lists.findAll());
});

app.get('/lists/:id', function (req, res) {
    var id = req.params.id;
    res.json(lists.findById(id));
});

app.post('/lists', function(req, res){
	var json = req.body;
	res.send(json.title + 'added Successful')
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});

var lists = require('./lists');
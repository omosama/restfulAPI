var mongojs = require('./db');
var db = mongojs.connect;

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
	db.lists.count(function(err,result){
		if(result<=0){
			db.lists.insert(lists.findAll(),function(err,docs){

			})
		}res.send('<h1>Hello Node.js</h1>');
	})    
});

app.get('/lists', function (req, res) {
	db.lists.find(function(err,doc){
		res.json(docs);
	})    
});

app.get('/lists/:id', function (req, res) {
    var id = parseInt(req.params.id);
    db.lists.findOne({id:id},function(err,doc){
		res.json(docs);
	})      
});

app.post('/lists', function(req, res){
	var json = req.body;
	db.lists.insert(json,function(err,docs){
		res.send(docs.title + ' added Successful')
	})	
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});

var lists = require('./lists');
var mongojs = require('mongojs');

var databaseUrl = 'kamomo_mongojs';
var collections = ['lists'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};
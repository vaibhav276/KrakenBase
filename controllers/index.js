'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'krakenbase' };
        
        res.render('index', model);
        
    });

};

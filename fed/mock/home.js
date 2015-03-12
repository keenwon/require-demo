var common = require('./common');
var store = common.store;
var getFile = common.getFile;

module.exports = {

    'get /': function(req, res) {
        this.render.ftl(getFile('home'), store);
    },

    'get /home': function(req, res) {
        this.render.ftl(getFile('home'), store);
    }

};
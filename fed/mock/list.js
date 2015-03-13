var common = require('./common');
var store = common.store;
var getFile = common.getFile;

module.exports = {

    'get /list': function(req, res) {
        this.render.ftl(getFile('list'), store);
    }

};
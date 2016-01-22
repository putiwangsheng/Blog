var fse = require('fs-extra');
var fs = require('fs');
var path = require('path');
var byline = require('byline');

var mogodbConfigPath = './mongod.conf';

var stream = byline(fs.createReadStream(mogodbConfigPath));

var dbpath = "";
var logpath = "";
stream.on('data', function(line) {
    var strs = line.toString().split('=');
    if (strs[0] === 'dbpath') {
        dbpath = strs[1];
    }
    if (strs[0] === 'logpath') {
        logpath = path.dirname(strs[1]);
    }
}).on('end', function () {
    fse.ensureDir(dbpath, function (err) {
        if(err) console.log(err); // => null
        // dir has now been created, including the directory it is to be placed in
    });

    fse.ensureDir(logpath, function (err) {
        if(err) console.log(err); // => null
        // dir has now been created, including the directory it is to be placed in
    });
});

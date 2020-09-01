var exec = require('cordova/exec');

function restartappplugin() {};

restartappplugin.prototype.setCustomExceptionHandler = function () {
    exec(function (res) { console.log('Set custom exception handler', res) }, function (err) { console.log(err) }, "restartappplugin", "setCustomExceptionHandler", []);
}

restartappplugin.install = function () {
    if (!window.plugins) window.plugins = {};
    var rap = new restartappplugin();
    window.plugins.restartappplugin = rap.restartappplugin;
    window.plugins.rap = rap;
    return window.plugins;
}

cordova.addConstructor(restartappplugin.install);
module.exports = new restartappplugin();

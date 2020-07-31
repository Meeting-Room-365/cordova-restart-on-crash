var exec = require('cordova/exec');

function restartappplugin() {};

restartappplugin.prototype.setCustomExceptionHandler = function () {
    exec(function (res) { console.log('Set custom exception handler', res) }, function (err) { console.log(err) }, "restartappplugin", "setCustomExceptionHandler", []);
}

restartappplugin.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }
    window.plugins = new restartappplugin();
    return window.plugins;
}

cordova.addConstructor(restartappplugin.install);
module.exports = new restartappplugin();

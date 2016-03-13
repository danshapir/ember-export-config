/* jshint node: true */
'use strict';
var fs           = require('fs');
var path           = require('path');
module.exports = {
  name: 'export-config',
  included: function(app) {
    this._super.included(app);
    app._contentForConfigModule = function () {
      var content = arguments[0];
      var config = arguments[1];
      var exportLocation = config.modulePrefix + "Config/config/environment";
      var envFile = "define('"+ exportLocation +"', ['ember'], function(Ember) {";
      envFile += 'return { \'default\': ' + JSON.stringify(config) + '};'
      envFile += "});";
      fs.writeFileSync(path.join(app.bowerDirectory, 'tmpConfig.js'), envFile, 'utf8');
      content.push("return require('"+ exportLocation +"')['default']");
    };
    app.import(path.join(app.bowerDirectory, 'tmpConfig.js'), { outputFile: 'assets/config.js'});
  }
};

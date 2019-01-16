const Generator = require('yeoman-generator');

module.exports = class GeneratorVanilla extends Generator {
  writing() {
    // Extend package.json
    this.fs.extendJSON(
      this.destinationPath('package.json'),
      this.fs.readJSON(this.templatePath('_package.json'))
    );
  }
};

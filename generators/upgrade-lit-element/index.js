const Generator = require('yeoman-generator');

module.exports = class GeneratorVanilla extends Generator {
  prompting() {
    const path = require('path');
    return this.prompt([
      {
        type: 'input',
        name: 'elementName',
        message: 'What is the name of your element?',
        validate: input =>
          input.indexOf('-') === -1
            ? 'Custom element names require at least one `-`'
            : true,
        default: process
          .cwd()
          .split(path.sep)
          .pop(),
        store: true
      }
    ]).then(props1 => {
      this.props = Object.assign({}, props1);
    });
  }

  writing() {
    let pkgJSON = this.fs.readJSON(this.destinationPath('package.json'));
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.templatePath('__package.json'),
      this.props
    );
    let pkgJSONExtensions = this.fs.readJSON(this.templatePath('__package.json'));

    let pkgJSONNew = {
      ...pkgJSON,
      ...pkgJSONExtensions,
      scripts: {
        ...pkgJSON.scripts,
        ...pkgJSONExtensions.scripts
      },
      dependencies: {
        ...pkgJSON.dependencies,
        ...pkgJSONExtensions.dependencies
      }
    };

    delete pkgJSONNew.dependencies['@polymer/lit-element'];

    this.fs.writeJSON(this.destinationPath('package.json'), pkgJSONNew);

    var glob = require('glob-fs')({ gitignore: true });

    var jsFiles = glob.readdirSync('**/*.js');

    jsFiles.forEach(file => {
      let script = this.fs.read(this.destinationPath(file));
      let regex = new RegExp('@polymer/lit-element/lit-element.js', 'ig');
      let newScript = script.replace(regex, 'lit-element/lit-element.js');

      this.fs.write(this.destinationPath(file), newScript);
    });
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};

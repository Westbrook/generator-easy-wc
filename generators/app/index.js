'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.appname = this._dashedCaseFromSpaces(this.appname);
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the super-excellent ${chalk.red('generator-easy-wc')} generator!`)
    );

    const prompts1 = [
      {
        type: 'input',
        name: 'authorName',
        message: 'What is your name?',
        default: 'author',
        store: true
      },
      {
        type: 'input',
        name: 'orgName',
        message: 'What is your GitHub username or organization?',
        default: 'org',
        store: true
      },
      {
        type: 'input',
        name: 'elementName',
        message: 'What would you like this element to be called?',
        validate: input =>
          input.indexOf('-') === -1
            ? 'Custom element names require at least one `-`'
            : true,
        default: this.appname,
        store: true
      }
    ];

    return this.prompt(prompts1).then(props1 => {
      const prompts2 = [
        {
          type: 'input',
          name: 'className',
          message: 'What name would you like for the class that describes this element?',
          validate: input =>
            input.indexOf('-') > -1 ? 'Class names cannot include `-`' : true,
          default: this._makeClassName(props1.elementName)
        }
      ];
      return this.prompt(prompts2).then(props2 => {
        const prompts3 = [
          {
            type: 'input',
            name: 'packageName',
            message:
              "What should the element's package name be? (this will be combined with the user or org name a la: `@org/package-name`)",
            default: props1.elementName
          },
          {
            type: 'input',
            name: 'elementDescription',
            message: 'What does this element do?',
            default: 'nothing yet'
          }
        ];
        return this.prompt(prompts3).then(props3 => {
          this.props = Object.assign({}, props1, props2, props3);
        });
      });
    });
  }

  _makeClassName(element) {
    if (typeof element !== 'undefined') {
      return element
        .split('-')
        .map(name => {
          return name.charAt(0).toUpperCase() + name.slice(1);
        })
        .join('');
    }
    return element;
  }

  _dashedCaseFromSpaces(name) {
    if (typeof name !== 'undefined') {
      return name.replace(/\s/g, '-');
    }
  }

  writing() {
    const elementName = this.props.elementName;

    this.fs.copyTpl(
      `${this.templatePath()}/!(src)**/*`,
      this.destinationPath(),
      this.props
    );

    this.fs.copyTpl(`${this.templatePath()}/*`, this.destinationPath(), this.props);

    this.fs.copyTpl(
      `${this.templatePath()}/**/.!(gitignorefile)*`,
      this.destinationRoot(),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('.gitignorefile'),
      this.destinationPath(`.gitignore`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('src/.circleci/_config.yml'),
      this.destinationPath(`.circleci/config.yml`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath(`src/_element.js`),
      this.destinationPath(`src/${elementName}.js`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath(`src/_element-styles.js`),
      this.destinationPath(`src/${elementName}-styles.js`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath(`src/_element-base.js`),
      this.destinationPath(`src/${elementName}-base.js`),
      this.props
    );
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};

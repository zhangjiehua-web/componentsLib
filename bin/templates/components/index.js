const Generator = require('yeoman-generator');
const path = require('path');
const { execSync } = require('child_process');
const { template, upperFirst } = require('lodash');
module.exports = class extends Generator {
  constructor(args) {
    super(args);
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'name',
        name: 'name',
        message: 'please input the component name({name})',
        validate(input) {
          return !!input;
        }
      }
    ]);
    execSync(`mkdir ${this.answers.name}`, {
      cwd: path.resolve(__dirname, '../../../components')
    });
  }

  writing() {
    const self = this;
    const des = this.destinationPath(`components/${this.answers.name}`);
    const src = path.resolve(__dirname, './template');
    this.fs.copyTpl(
      `${src}/**`,
      des,
      {
        name: self.answers.name,
        upperName: upperFirst(self.answers.name)
      }
    );
  }
};

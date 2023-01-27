const Generator = require('yeoman-generator');
const path = require('path');
const { execSync } = require('child_process');
const { template } = require('lodash');
module.exports = class extends Generator {
  constructor(args) {
    super(args);
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'name',
        name: 'name',
        message: 'please input the package name({name})',
        validate(input) {
          return !!input;
        }
      }
    ]);
    execSync(`mkdir ${this.answers.name}`, {
      cwd: path.resolve(__dirname, '../../../packages')
    });
  }

  writing() {
    const self = this;
    const des = this.destinationPath(`packages/${this.answers.name}`);
    const src = path.resolve(__dirname, './template');
    this.fs.copy(
      `${src}/**`,
      des,
      {
        process(content) {
          const compiled = template(content.toString());
          return compiled(self.answers);
        }
      }
    );
  }
};

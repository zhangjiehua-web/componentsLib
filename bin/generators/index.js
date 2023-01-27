const Generator = require('yeoman-generator');
const path = require('path');
const { execSync } = require('child_process');
module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'what do you want to create',
        choices: ['components', 'packages'],
        default: 0
      }
    ]);
  }

  execOther() {
    const generator = path.resolve(__dirname, `../templates/${this.answers.type}`);
    execSync(`yo ${generator}`, { stdio: 'inherit' });
  }
};
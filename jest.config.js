const path = require('path')
module.exports = {
  verbose: true,
  modulePaths: [path.resolve(process.cwd(), './test/')],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
}
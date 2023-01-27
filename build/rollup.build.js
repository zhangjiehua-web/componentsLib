import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
// const { uglify } = require('rollup-plugin-uglify');
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
const path = require('path');

const packageInfo = require(path.resolve(process.cwd(), 'package.json'));
const name = packageInfo.name.split('/')[1].split('-').pop();
const distPath = path.resolve(process.cwd(), 'dist');

export default {
  input: path.resolve(process.cwd(), 'src/index.js'),
  output: [
    {
      file: `${distPath}/${name}.umd.js`,
      format: 'cjs'
    },
    {
      file: `${distPath}/${name}.esm.js`,
      format: 'esm'
    }
  ],
  plugins: [
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs({
      include: 'node_modules/**', // Default: undefined
      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false, // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false // Default: true

      // explicitly specify unresolvable named exports
      // (see below for more details)
      // namedExports: { 'react': ['createElement', 'Component' ] },  // Default: undefined

      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      // ignore: [ 'conditional-runtime-dependency' ]
    }),
    json(),
    babel({
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    terser()
  ]
};
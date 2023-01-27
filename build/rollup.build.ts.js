// rollup 编译ts 版本
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
// const { uglify } = require('rollup-plugin-uglify');
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';
import sourceMaps from 'rollup-plugin-sourcemaps';
const path = require('path');

const packageInfo = require(path.resolve(process.cwd(), 'package.json'));
const name = packageInfo.name.split('/')[1].split('-').pop();
const distPath = path.resolve(process.cwd(), 'dist');

export default {
  input: path.resolve(process.cwd(), 'src/index.ts'),
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
    json(),
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    }),
    sourceMaps(),
    babel({
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    terser()
  ]
};
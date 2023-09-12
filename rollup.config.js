const path = require('path');

const { defineConfig } = require('rollup');
const vuePlugin = require('rollup-plugin-vue');
const babelPlugin = require('@rollup/plugin-babel');
const { terser: terserPlugin } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = defineConfig([
  {
    input: 'src/index.js',

    treeshake: true,

    watch: true,

    cache: false,

    output: {
      file: path.resolve(__dirname, 'dist/index.js'),
      format: 'es'
    },

    plugins: [
      nodeResolve(),
      commonjs(),
      vuePlugin({
        css: true,
        compileTemplate: true,
        template: {
          isProduction: true
        }
      }),
      babelPlugin({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.js', '.vue']
      }),
      terserPlugin()
    ],

    external: ['vue']
  }
]);

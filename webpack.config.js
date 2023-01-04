const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

const glop = require('glob');
const list = {};

async function makeList(dirPath, list) {
  const files = glop.sync(`${dirPath}/**/index.js`);
  files.forEach(file => {
    const component = file.split(/[/.]/)[2];
    list[component] = `./${file}`;
  })
}

makeList('components/lib', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd',
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      }
    ]
  }
}
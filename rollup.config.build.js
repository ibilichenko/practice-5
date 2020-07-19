import config from './rollup.config.js';
import merge from 'lodash/merge';

export default merge({
  input: 'src/index.jsx',
  output: {
    file: 'build/bundle.js'
  }
}, config);

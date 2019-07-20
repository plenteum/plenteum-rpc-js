'use strict'

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'PlenteumRPC.js',
    library: 'PlenteumRPC',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty'
  },
  target: 'web'
}

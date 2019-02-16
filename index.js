// Copyright (c) 2018, Brandon Lehmann, The TurtleCoin Developers
//
// Please see the included LICENSE file for more information.

'use strict'

module.exports.Plenteumd = require('./lib/plenteumd-rpc.js')
module.exports.WalletService = require('./lib/service-rpc.js')

// These exports will be deprecated in a future version.
// Continue to use them at your own risk.
module.exports.Walletd = require('./lib/service-rpc.js')
module.exports.Service = require('./lib/service-rpc.js')
module.exports.Client = require('./lib/plenteumd-rpc.js')

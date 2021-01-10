#!/usr/bin/env node
var Conf = require('conf'),
config = new Conf()
options = require('minimist')(process.argv.slice(2)),
inId = options.i || options.id || process.env.SID,
inNum = options.cn || options.cnumber || process.env.NUM,
inKey = options.k || options.key || process.env.KEY;

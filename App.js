#!/usr/bin/env node
var Conf = require('conf'),
config = new Conf()
options = require('minimist')(process.argv.slice(2)),
chalk = require('chalk'),
inId = options.i || options.id || process.env.SID,
twilio = require('twilio'),
message = options.message || options.m || 'No Message',
number = options.c || options.call || process.env.CALL,
inNum = options.n || options.number || process.env.NUM,
inKey = options.k || options.key || process.env.KEY;
if(inId&&inKey&&inNum){
console.log('Id : '+inId+' Key: '+inKey + 'Number : ' + inNum )
    config.set('twilionum',inNum);
    config.set('twilioid',inId);
    config.set('twiliokey',inKey);
    process.exit(0)
}
else if(check()) call()

function check(){
if(config.get('twilionum')&&config.get('twilioid')&&config.get('twiliokey')) return true
else {
console.log(chalk.red('Please set id and key and number'))
return false}}

function call(){
var client = twilio(config.get('twilioid'),config.get('twiliokey'));
client.messages
  .create({
     body: message,
     from: config.get('twilionum'),
     to: number
   })

console.log(`Number ${number} From : ${config.get('twilionum')} Message : ${message}`)
}
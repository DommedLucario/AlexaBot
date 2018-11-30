module.exports.run = async (bot, message, args) =>{
var randomstring = require('randomstring')
if(!args[0]) return message.channel.send('`Length is needed. Please retry command.`')
if(args[0] > 2000) return message.channel.send('Cannot generate password [DISCORD API ERROR: MUST BE 2000 IN LENGTH OR LOWER.]')
var a = randomstring.generate({
  length: args[0]
})
message.author.send(a)
  message.channel.send('`Password Generated. Check private messages.`')
  
}

module.exports.help = {
  name: 'password',
  helpn: 'Password',
  description: 'Generate a password. ***GENERATED PASSWORDS ARE NOT SAVED***'
}
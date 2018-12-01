module.exports.run = async (bot, message, args) => {
let d = require('quick.db')
let prefix = args[0]
if(!prefix) return message.channel.send('Retry the command. [No Prefix set]')
d.set(message.author.id + '_prefix', prefix)
  message.channel.send('Your prefix is now: '+prefix)
}

module.exports.help = {
  name: 'prefix',
  nameh: 'Prefix',
  description: 'Set your prefix.'
}
module.exports.run = async (bot, message, args) => {
let d = require('quick.db') // Let it run with args[1]
console.log(args) // gonna see how args work >:C
 //thats wrong, it wont work.
let prefix = args[0 /*because 1 wouldnt be alexa prefix reset*/]
if(!prefix) return message.channel.send('Retry the command. [No Prefix set]')
  if(prefix == 'reset') {
    d.delete(message.author.id + '_prefix')
    message.channel.send('Prefix Reset!')
  }
d.set(message.author.id + '_prefix', prefix)
  message.channel.send('Your prefix is now: '+prefix)
}

module.exports.help = {
  name: 'prefix',
  nameh: 'Prefix',
  description: 'Set your prefix.'
}
module.exports.run = async (bot, message, args, placeholder, queue) => {
  var songQueue = queue.get(message.guild.id)
  if(args[0] > 200) return message.channel.send('Volume cannot be greater than 200')
  songQueue.data.dispatcher.setVolumeLogarithmic(args[0]/2)
  
}

module.exports.help = {
name: 'volume',
helpn: 'Volume',
  description: 'volume > 900'
}
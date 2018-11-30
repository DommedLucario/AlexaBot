const Discord = require('discord.js')

module.exports.run = async (bot, message, args, placeholder, queue) => {
  var songQueue = queue.get(message.guild.id);
  if (!songQueue) return message.channel.send('You need to add music before checking queue!');
    let queueembed = new Discord.RichEmbed()
    .setTitle("Queue!")
    .addField("Now Playing:" ,songQueue.songs[0].title)
  for (var num = 1; num < songQueue.songs.length; num++) {
  queueembed.addField(num, songQueue.songs[num].title)
  }
 
  
 return message.channel.send(queueembed);
}

module.exports.help = {
  name: "queue",
  helpn: "Queue",
  description: "View Queue."
}
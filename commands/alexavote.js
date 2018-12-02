const Discord = require('discord.js');
const fs = require('fs')


module.exports.run = async (bot, message, args, prefix) => {
 
  let vote = new Discord.RichEmbed()
  .setURL('https://discordbots.org/bot/513129952527253504')
  .setTitle('Vote for the bot!')
  
  return message.channel.send(vote)
  
}
//hello, my good sir. it is like google docs. except with color
module.exports.help = {
  name: "vote",
  helpn: "Vote",
  description: "Vote for the bot for free!"
}

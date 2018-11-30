const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
  
  let avatar = message.author.displayAvatarURL
  let info = new Discord.RichEmbed()
  .setAuthor(`Requested by : ${message.author.username}`, avatar)
  .addField("Bot Owners:", 'dicedtomato#7108\nRalsei#0697')
  .addField("About Bot:", "Alexa bot is inspired by alexa echo series of brands by amazon, we decided to make a clone of echo to discord and it is work in progress so don't expect everything to work.")
   .addField("How to view contributors:", "Alexa, contributors")
  return message.channel.send(info)
  
}
             
            
module.exports.help = {
  name: "info",
  helpn: "Info",
  description: "Get bot information [Owners, etc.]",
  aliases: ['about']
}
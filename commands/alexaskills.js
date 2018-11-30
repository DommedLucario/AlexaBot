const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
  
  
  let avatar = message.author.displayAvatarURL
  let info = new Discord.RichEmbed()
  .setAuthor(`Requested by : ${message.author.username}`, avatar)
  .addField("What are 'Skills'? ", 'Skills are applications you can enable that can en')
  .addField("Skills:", `AlexaAddons\nAlexaCommands\nAlexaStats\nAlexaPing\nAlexaMusic`)

  return message.channel.send(info)
  
}
             
            
module.exports.help = {
  name: "skills",
  helpn: "Skills",
  description: "Skills for alexa"
}
module.exports.conf = {
  aliases: ['addons', 'skill']
}
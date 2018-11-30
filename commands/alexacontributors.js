const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
  // I'll get started! :D
  
  let avatar = message.author.displayAvatarURL
  let info = new Discord.RichEmbed()
  .setAuthor(`Requested by : ${message.author.username}`, avatar)
  .addField("Contributors:", 'People who really helped us out on alexa-bot!')
  .addField("Prefix:", "Kirb#0001 - Helped with prefix!")
  .addField("Music-Modules:", "TacticalTechJay#8380 - Helped out with the search system!")

  return message.channel.send(info)
  
}
             
            
module.exports.help = {
  name: "contributors",
  helpn: "Contributors",
  description: "View helpers of the bot."
  
}
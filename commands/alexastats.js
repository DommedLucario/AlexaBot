const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
  
  
  let avatar = bot.displayAvatarURL
  let statsem = new Discord.RichEmbed()
  .setAuthor(`Requested by: ${message.author.username}`, avatar)
  .addField("Processes", `**NodeJS**: ${process.version}\n**Discord.JS**: ${require('discord.js').version}`, true)
  .addBlankField()
  .addField("Memory Usage", Math.round(process.memoryUsage().heapUsed /512/512) + "/512 MB", true)
  .addField("Users", `${bot.users.size} connected`, true)
  .addField("Guilds", `${bot.guilds.size} connected`, true)
  .setFooter("Alexa")

  return message.channel.send(statsem)
  
}
             
            
module.exports.help = {
  name: "stats",
  helpn: "Stats",
  description: "Show the status/stats of alexa-bot"
}
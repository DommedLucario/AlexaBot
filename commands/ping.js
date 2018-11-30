const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let helpcon = message.author.displayAvatarURL


  let embed = new Discord.RichEmbed()
  .setColor("#29b0ff")
  .setAuthor(message.author.username, helpcon)
  .addField("Ping:", `${Date.now() - message.createdTimestamp}` + ' ms', true);

  message.channel.send(embed);

}

module.exports.help = {
  name: "ping",
  helpn: "Ping",
  description: "Gets the ping!"
  
}

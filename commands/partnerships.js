module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js")
  const embed = new Discord.RichEmbed()
    .setTitle("Current Partnerships")
    .setDescription("[Dorito Boi](https://discordbots.org/bot/487090581101740042/vote)")
  message.channel.send(embed)
}

module.exports.help = {
  name: "partnerships",
  helpn: "Partnerships",
  description: "List partnerships with other bots!"
}
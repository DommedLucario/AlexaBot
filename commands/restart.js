const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== '246867546924384266'|| '231956829159161856') return message.channel.send(":x: Error! If you belive this wasn't an error on our part please let us know in our support server.")
  if (message.author.id == '246867546924384266'|| '231956829159161856') {
  message.channel.send(`\`Process exiting with code: ${args[0]}\``)
  process.exit(args[0])
  }
}
//welp u work on this ima do the startquick
//restart the bot again

module.exports.help = {
  name: "restart",
  helpn: "Restart",
  description:"[Owner Only] Restart the bot (error code required)"
}
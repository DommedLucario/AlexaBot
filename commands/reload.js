module.exports.run = async (bot, message, args) => {
  let commandname = args[0]
  if(!commandname) return message.channel.send("Input a command name.")
  bot.commands.delete(commandname)
  let u = require(`./${commandname}.js`)
  bot.commands.set(u.help.name, u)
  
  
}

module.exports.help = {
  name: "reload",
  helpn: "Reload",
  description: ""
}
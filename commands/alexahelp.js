const Discord = require('discord.js');


module.exports.run = async (bot, message, args, prefix) => {

//hello good sir. this is like google docs my man.
  
  let avatar = message.author.displayAvatarURL
  let alexahelp = new Discord.RichEmbed()
  .setAuthor("Help", avatar) //prefix is exactly "Alexa, "
  .setColor("#29b0ff")
  .addField('Welcome to Alexa!', 'This bot is based of the popular home-assistant.', true)
  bot.commands.map(c => {
    alexahelp.addField(`Command Name: ${c.help.helpn}` , `Description: ${c.help.description} \n Usage: ${/*prefix*/prefix} ${c.help.name}`)
  })
  
  return message.channel.send(alexahelp)
  
}
//hello, my good sir. it is like google docs. except with color
module.exports.help = {
  name: "help",
  helpn: "Help",
  description: "View Help Commands"
}

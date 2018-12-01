const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

//hello good sir. this is like google docs my man.
  
  let avatar = bot.displayAvatarURL
  let alexahelp = new Discord.RichEmbed()
  .setAuthor("Get started now with Alexa.", avatar) //prefix is exactly "Alexa, "
  .setColor("#29b0ff")
  .addField('Welcome to alexa quick start guide', 'To get started the wake word that the developers chose is \"Alexa,\"\nYou can find the list of commands and skills in Alexa,help', true)
  .addField('Things to know', 'Wake-Word: Alexa,\nBuilt in NODEJS', true)
  
  return message.channel.send(alexahelp)
  
}
//hello, my good sir. it is like google docs. except with color
module.exports.help = {
  name: "getstarted",
  helpn: "GetStarted",
  description: "Get Started [first time run?]"
}

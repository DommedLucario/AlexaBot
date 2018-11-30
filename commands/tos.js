const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
  
let tos = new Discord.RichEmbed()
.setTitle('Terms of Service : Alexa-Bot!')
.setDescription('*Alexa-Bot ToS*')
.addField('Blacklist', 'We have the right to blacklist, if you are going to abuse commands that will cause our bot to go offline/take up more memory than normal you will be tracked down, and get your guild\'s that are connected to the command-spammers guilds they abused those commands in, all commands are also logged!')
.addField('What we log', 'We log all commands that are being used by anyone, as this feature is not yet a thing it will soon be.')
.addField('Spam', 'If we see that you are spamming our commands to-much to the point the messages get backed up, you will be blacklisted (see blacklist).')
.addField('Alexa', 'We only have the intention of making something that is similar to the Amazon Alexa, and we are not trying to copy them or even doing anything like that! This was just a fun-bot that 2 people with alexa\'s did. For more imformation please visit the info command. "Alexa, info"')
.addField('Discord', 'All discord TOS rules to apply, as well and if you are caught using our bot to breach- the terms of service of discord you will be blacklisted. (see blacklist).')
.setFooter('Alexa-Bot-Discord TOS')

message.channel.send(tos)
  

}
             
            
module.exports.help = {
  name: "terms",
  helpn: "Terms",
  description: "View the terms of service"
}

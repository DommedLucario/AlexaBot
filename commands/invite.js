const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let ree = new Discord.RichEmbed()
  .setTitle('Invite to your guild!')
  .setColor("#29b0ff")
  .setDescription('*You will be amazed at the bot.*')
  .setURL('https://discordapp.com/oauth2/authorize?client_id=513129952527253504&scope=bot&permissions=2105015551')
  
  message.channel.send(ree)
  
}
             
            
module.exports.help = {
  name: "invite",
  helpn: "Invite",
  description: "Invite the bot to your server!"
}

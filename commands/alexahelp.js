const Discord = require('discord.js');
const fs = require('fs')


module.exports.run = async (bot, message, args, prefix) => {
  
  fs.readdir('./commands', (err, files) => {
      let filelen = (files.length);
        let avatar = message.author.displayAvatarURL
        let alexahelp = new Discord.RichEmbed() 
        alexahelp.setAuthor("Help", avatar) //prefix is exactly "Alexa, "
        alexahelp.setColor("#29b0ff")
        alexahelp.addField(`${filelen} Commands`, '[Commands - Website](https://alexa-bot.gitch.me/commands)', true)
        alexahelp.addField('Support', 'Support server will be coming soon™', true)
      // WONT WORK CAPS IS STUCK
        alexahelp.addBlankField
        alexahelp.addField('Commnads(Legacy, will be removed when website is finished)', message.client.commands.map(c => `${prefix} ${c.help.name} | ${c.help.description}`).join("\n"), true)
        return message.channel.send(alexahelp)
  }); 
}
//hello, my good sir. it is like google docs. except with color
module.exports.help = {
  name: "help",
  helpn: "Help",
  description: "View Help Commands"
}


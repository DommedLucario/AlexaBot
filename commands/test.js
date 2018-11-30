const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
  bot.errMsg("test")

  
message.channel.send('test')
      .then(function(){
        message.channel.awaitMessages(response => message.author == response.author, {
          max: 1,
          time: 10000,
          errors: ['time'],
        })
        .then((collected = "test") => {
                    message.channel.send('ree')
          })
      
          .catch(function(){
            message.channel.send('Exeded 10 second limit. Use command again to restart.');
          })
      });
 
  
  
  }

             
            
module.exports.help = {
  name: "test",
  helpn: "test",
  description: "test"
}
module.exports.conf = {
  aliases: ['addons', 'skill']
}
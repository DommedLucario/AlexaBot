/*Ralsei's Comments:
ignore code below



*/

/*Dicedtomato's Comments



*/



/*TacticalTechJay's Comments:
  Soon-to-be-added:
  + volume! OuO
  + pause command!
  + improved play command! :D
  ++ Queue command (That won't break every once in a while)
*/
const hastebin =require('hastebin-gen-2')
const { RichEmbed } = require('discord.js')
module.exports = (bot) => {
  bot.errMsg =(msg)=>{
    bot.fetchUser(process.env.ralsei).then(u => u.send(msg))
    bot.fetchUser(process.env.diced).then(u => u.send(msg))
    bot.fetchUser("127888387364487168").then(u => u.send(msg))
  }
    bot.devMsg =(msg)=>{
    bot.fetchUser(process.env.ralsei).then(u => u.send(msg))
    bot.fetchUser(process.env.diced).then(u => u.send(msg))
    bot.fetchUser("127888387364487168").then(u => u.send(msg))
  }
  
  bot.fetchGuild = (id) => {
    bot.guilds.get('id', id)
  }
  bot.clientValues = (message) => {
    message.channel.send(bot.users.size + ' users')
    message.channel.send(bot.guilds.size + ' servers')
  }
  bot.getGuildValues = (message) => {
    let embed = new RichEmbed()
    .setTitle('Guild Info')
    .addField('Members:', message.guild.memberCount)
    .addField('Owner:', message.guild.owner.user.tag)
    .addField('Role Count:', message.guild.roles.size)
    .addField('Roles Names:', message.guild.roles.map(r => r.name).join(', \n'))
    .addField('Large guild:', message.guild.large)
    message.channel.send(embed)
  }
  bot.hastebin = (code, ext, message) => {
    hastebin(code, ext).then(r => {
      message.channel.send(r)
    })
  }
  
  bot.fetch = (url, message) => {
    var get = require('snekfetch')
    get.get(url).then(r => {
      message.channel.send(r.body)
  })
  }
  bot.restart = () => { process.exit(0) }
  bot.emojify = (emoji, message) => {
    message.channel.send(":"+emoji+":")
  }
  
}
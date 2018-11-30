const Discord = require("discord.js")
const ytdl = require("ytdl-core")

module.exports.run = async (bot, message, args) => {
  message.channel.send("Send a URL now! [no command needed] `Cancel` to cancel.")
  .then(()=>{
  message.channel.awaitMessages(response => message.author == response.author, {
    max: 1,
    time: 10000,
    errors: ["time"]
  }).then(collected => {
    let url = collected.first().content
    if(url == "Cancel") return message.channel.send("Command Canceled!") 
  let vc = message.member.voiceChannel
  if(!ytdl.validateURL(url)) return message.channel.send("Invalid YouTube URL!");
  let info = ytdl.getInfo(url)
  vc.join().then(async function(c){
    let infoEmbed = new Discord.RichEmbed()
    .addField(info.title, info.author.name)
    message.channel.send(infoEmbed)
    const dispatcher = await c.playStream(ytdl(url, { filter: "audioonly" }))
    dispatcher.on("finish", () => {
      vc.leave()
      message.channel.send("Ok, Song is done, left the channel")
  })
})
}).catch(function(){
    message.channel.send("Time out! Retry the command.")
})
  })
}

module.exports.help = {
  name: "play",
  helpn: "Play",
  description: " 🎵Alexa, play despacito🎵 "
}

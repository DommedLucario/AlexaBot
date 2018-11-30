const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {


const shortcode = (n) => {
  const possible = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz0123456789'
  let text = ''
  for (var i = 0; i < n + 1; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
  return text;
}

const code = shortcode(8)

const codeid = (n) => {
  const possible = '0123456789'
  let text2 = ''
  for (var i = 0; i < n + 1; i++) text2 += possible.charAt(Math.floor(Math.random() * possible.length))
  return text2;
}


const verid = codeid(23)


let embedstuff = {

  color: 3553598,
  icon: message.author.displayAvatarURL

}




let verification = new Discord.RichEmbed()
.setAuthor(`Requsted by : ${message.author.username}`, embedstuff.icon)
.setColor(embedstuff.color)
.addField("Verification", `${code}`)
.setFooter(`Verification Id: ${verid}`)

  
  
  
  const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')
 
// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText(code, 50, 50)
 

const attachment = new Discord.Attachment(canvas.toBuffer, 'Code.png');
message.channel.send("asd", attachment)
      .then(function(){
        message.channel.awaitMessages(response => message.author == response.author, {
          max: 1,
          time: 10000,
          errors: ['time'],
        })
        .then((collected)=>{
          if(collected.first().content == code) {
                    message.channel.send('Great! You solved the code.')
          }else{
          message.channel.send("YEETUS YEETUS, YOU SENT THE WRONG NUMBA")
          }})
            // no one toucn this pls
            .catch(function(){
            message.channel.send('Exeded 10 second limit. Use command again to restart.');
          })
  
      });




}

module.exports.help = {
  name: "code",
  helpn: "Code"
}

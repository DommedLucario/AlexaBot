//figured it out, paste old code back

var h = ['127888387364487168' , '246867546924384266', '231956829159161856']
var id = new Set(h)
//

module.exports.run = async (bot, message, args, placeholder,queue) => {
        try {
          const code = args.join(" ");
          //figured it out, paste old code back
  
var h = ['127888387364487168' , '246867546924384266', '231956829159161856']
var id = new Set(h)
//

module.exports.run = async (bot, message, args, placeholder,queue) => {
        if(!id.has(message.author.id)) return message.reply(":x: You can't use this command, if you this is an error please talk to a bot administrator preferably the bot owner, if the bot owner is not available please use ;support to see our channel for support.")
        try {
          const code = args.join(" ");
          if(code.includes('bot.token')) return message.channel.send('NO BOT TOKEN FOR U')
          if(message.channel.type != "dm"){
          if(code.includes('process')) return message.channel.send('we made the mistake one don\'nt do it.');
          }
          let evaled = eval(code);

          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
          if(evaled.length > 1998) {
            bot.hastebin(evaled, 'xl', message)
          }
          message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
}

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }



module.exports.help = {
  name: "eval",
  helpn: "Eval"
}
if(code.includes('bot.token')) return message.channel.send('NO BOT TOKEN FOR U')
          if(message.channel.type != "dm"){
          if(code.includes('process')) return message.channel.send('we made the mistake one don\'nt do it.');
          }
          let evaled = eval(code);

          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
          if(evaled.length > 1998) {
            bot.hastebin(evaled, 'xl', message)
          }
          message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
}

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }



module.exports.help = {
  name: "eval",
  helpn: "Eval"
}

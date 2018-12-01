//figured it out, paste old code back
const { owners } = require("./../botconfig.json")
var I = owners
, id = new Set(I)
//

module.exports.run = async (bot, message, args) => {
        if(!id.has(message.author.id)) return message.reply(":x: You can't use this command, if you this is an error please talk to a bot administrator preferably the bot owner, if the bot owner is not available please use ;support to see our channel for support.")
        try {
          const { exec } = require('child_process');
          exec(args.join(" "), (err, stdout,stderr) => { 
            message.channel.send({embed: {description: stdout}})
                                                       
            if(stderr) message.channel.send({embed: {description: stderr}})
          })
} catch(err) {
  bot.errMsg(err.stack)
}

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
}



module.exports.help = {
  name: "exec",
  helpn: "Exec"
}

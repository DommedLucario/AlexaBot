const Discord = require("discord.js");
const { token, owners } = require('./config.json')
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});
const http = require('http');
const express = require('express');
const app = express();
const superagent = require('superagent')
require("./comments.js")(bot)
var h = owners
var id = new Set(h)
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/index.html');

  
});
app.get("/api", (request, response) => {
  response.sendFile(__dirname + '/api/index.html');

});


app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://alexabot.glitch.me/`);
}, 280000);


/*

API START

*/

let cmp = require('./api/company.json');
var company = function () {
    app.get('/api/company', function (req, res) {
    let cmpr = cmp[Math.floor(Math.random() * cmp.length)]
      
        //Some other function call in callabck
        res.send(({response:cmpr}))    
    
    })
    setTimeout(company, 100000);
}
company();
// API IS HANDLED BY ME LOL
// WHY CANT I MAKE AN API AS WELL LoUk f
// k fine :) thx
let num = require('./api/numbers.json');
var numbera = function () {
    app.get('/api/random-number', function (req, res) {
    let cmpr = num[Math.floor(Math.random() * num.length)]
      
        //Some other function call in callabck
        res.send(({response:cmpr}))    
    
    })
    setTimeout(numbera, 100000);
}
numbera();


let emojia = require('./api/randomEmoji.json');
var emojis = function () {
    app.get('/api/random-emoji', function (req, res) {
    let cmpr = emojia[Math.floor(Math.random() * emojia.length)]
      
        //Some other function call in callabck
        res.send(({response:cmpr}))    
    
    })
    setTimeout(emojis, 100000);
}
emojis();

let roaster = require('./api/roast.json');
var rester = function () {
    app.get('/api/roast', function (req, res) {
    let cmpr = roaster[Math.floor(Math.random() * roaster.length)]
      
        //Some other function call in callabck
        res.send(({response:cmpr}))    
    
    })
    setTimeout(rester, 100000);
}
rester();



/*

API END

*/

/*

Function

*/

bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) bot.msgErr(err.stack);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("[Alexa-Log] Can't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`[Alexa-Logs] ${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });

});
bot.on('error' , (err) => {
bot.errMsg(err.stack)
})
//hey, i wen idle and forgot i had this open :3
bot.on("ready", async () => {
  console.log(`[Alexa-Logs] ${bot.user.username} has succsessfully logged on with no errors, if error they will be stated below, or when a command is run.`);

  //status
  
  let activityTypes = ['WATCHING']
  let randomType = activityTypes[Math.floor((Math.random()*activityTypes.length))]

  setInterval(async ()=>{
      await bot.user.setActivity(`${bot.users.size} users | Alexa, help`, { type: randomType })
      
      
  },10000)

  const hook = new Discord.WebhookClient('519363230611537922', 'rtfODw3urwNKUomCcjsDUg8tlHcYWDfXoHr6eGPuLw8kvwzBhrfPmxGiMTy39qXijSQb');
  const embed = new Discord.RichEmbed().setColor(0x36393E).setDescription("I have been summoned 👀");
  hook.send(embed)

  hook.send(`I, ${bot.user.username}, is onine!`)
  
  //end status

});
const queue = new Map()

bot.on("message", async (message, err) => {
  if(err) bot.msgErr(err)
  if(message.author.bot) return;
  if(message.author.id === '257413019787722752') return message.channel.send('Sem, you are blacklisted from alexa commands.')
  if(message.channel.type === "dm" && !id.has(message.author.id)) return message.reply("`ERROR` Can't use commands in Direct Messages.");
var db = require('quick.db') // **searches for quick db** 🤔🤔
let prefixArray = ['Alexa,', 'Alexa, ', '<@513129952527253504> ', '<@!513129952527253504> ', 'alexa,', 'alexa, ', 'echo, ', 'echo,', 'Echo,', 'Echo, ', 'alexa ', 'Alexa ']
    let prefixn = prefixArray.find(p => message.content.indexOf(p) === 0);
  let prefix = db.get(message.author.id + '_prefix')
  if(prefix == null) prefixn = prefixArray.find(p => message.content.indexOf(p) === 0);
  else prefixn = prefix
  if(!prefixn) return;
    const args = message.content.slice(prefixn.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
  
  
  // 
  
  //alexa addons by dicedtimito
var d = new Date(message.createdAt)
  
 if (message.content.startsWith(prefixn + " " + "what time is it")) { 
       message.channel.send('The time now is, ' + d)
 }
  
     if (message.content.startsWith(prefixn + " " + "how do i use you?")) { 
       message.channel.send('If you would like a full detailed list of our commands that we offer, please check out "Alexa, help"!');
 }

       if (message.content.startsWith(prefixn + " " + "what is your functionality")) { 
       message.channel.send('If you would like a full detailed list of our commands that we offer, please check out "Alexa, help"!');
 }
         if (message.content.startsWith(prefixn + " " + "what are the terms")) { 
       message.channel.send('The ToS is being created, to obtain it "Alexa, terms".');
 }
         if (message.content.startsWith(prefixn + " " + "what are the terms of service")) { 
       message.channel.send('The ToS is being created, to obtain it "Alexa, terms".');
 }
         if (message.content.startsWith(prefixn + " " + "what is the tos")) { 
       message.channel.send('The ToS is being created, to obtain it "Alexa, terms".');
 }
  
  
           if (message.content.startsWith(prefixn + " " + "generate a company")) { 
       message.channel.send('I generated a random company and it is: **' +  'sorry this is in the works'+ '**');
 }
  
  
  // 
             if (message.content.startsWith(prefixn + " " + "fucking shut the fuck up")) { 
       message.channel.send('I will not! If you want me to shut up please contact our devs.');
 }

  
  
  
  
  
  
  
  if(!message.content.startsWith(prefixn)) return;
  let messageArray = message.content.split(" ");
  
  let commandfile = bot.commands.get(command.slice(prefixn));
  if(commandfile) commandfile.run(bot,message,args,prefixn,queue); // Sometimes a placeholder might need to be used.

}); // Check out the code
/*hey */
bot.on('message', async(message, err) => {
if (!id.has(message.author.id) && message.channel.type != 'dm') {
    return;
  }
if (id.has(message.author.id) && message.channel.type === 'dm') {  
  if (message.attachments) {
    const a = message.attachments;
    bot.errMsg(`${message.author.username} | ${message.content} | ${(a).array()[0].url}`)
  }
    bot.errMsg(`${message.author.username} | ${message.content}`)
  
//u gotdeletes, try now,
}
//   if (message.channel.type === 'dm') {

//   }

});
bot.login(token);

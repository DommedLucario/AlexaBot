const Discord = require("discord.js");
const constprefix = require('./botconfig.json')
const fs = require("fs")
const token = process.env.token;
const bot = new Discord.Client({disableEveryone: true});
const http = require('http');
const express = require('express');
const app = express();
const superagent = require('superagent')
require("./comments.js")(bot)
var h = ['127888387364487168' , '246867546924384266', '231956829159161856']
var id = new Set(h)
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/index.html');

  
});
app.get("/api", (request, response) => {
  response.sendFile(__dirname + '/api/index.html');

});
app.get('/dashboard', (request, response) => {
  response.sendFile(__dirname+'/dashboard/index.html')
})
app.get('/commands', (request, response) => {
  response.sendFile(__dirname+'/commands/index.html')
})
app.get('/api/discord/login', (req, res) => {
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=513129952527253504&redirect_uri=http%3A%2F%2Falexa-bot.glitch.me%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=identify%20guilds`);
})

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://alexabot.glitch.me/`);
}, 280000);

const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('./utils');

app.get('/api/discord/callback', catchAsync(async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const code = req.query.code;
  const creds = btoa(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`);
  const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=https://alexa-bot.glitch.me/api/discord/callback`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
      },
    });
  const json = await response.json();
  res.redirect(`/?token=${json.access_token}`);
}));
app.use((err, req, res, next) => {
  switch (err.message) {
    case 'NoCodeProvided':
      return res.status(400).send({
        status: 'ERROR',
        error: err.message,
      });
    default:
      return res.status(500).send({
        status: 'ERROR',
        error: err.message,
      });
  }
});
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
  
  //end status

});
const queue = new Map()

bot.on("message", async (message, err) => {
  if(err) bot.msgErr(err)
  if(message.author.bot) return;
  if(message.channel.type === "dm" && !id.has(message.author.id)) return message.reply("`ERROR` Can't use commands in Direct Messages.");
var db = require('quick.db') // **searches for quick db** 🤔🤔
let prefixArray = ['Alexa,', 'Alexa, ', '<@513129952527253504> ', '<@!513129952527253504> ', 'alexa,', 'alexa, ', 'echo, ', 'echo,', 'Echo,', 'Echo, ', 'alexa ', 'Alexa ']
    let prefixn = prefixArray.find(p => message.content.indexOf(p) === 0);
  
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
// ?
});// go commands/index
bot.on('message', async(message, err) => {
if (!id.has(message.author.id) && message.channel.type === 'dm') {
    return message.author.send('`You can\'t type in DM`');
  }
if (id.has(message.author.id) && message.channel.type === 'dm') {  
    bot.errMsg(`${message.author.username} | ${message.content}`)
  if(message.attachments) {
    bot.errMsg(`${message.author.username} | ${(message.attachments).array()[0].url}`)
  }
  if(message.emojis) {}
//u gotdeletes, try now,
}

});
bot.login(token);
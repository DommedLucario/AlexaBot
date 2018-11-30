const express = require('express')// i got a question ok so do u know how do it lol kinda cause if okokokk ima try getting main.js to run
/*whats up \\ can u get me the client secret from the page where u made the bot profile?k <---- plis*/ // which client secret?? the build-a-bot or normalone
const router = express.Router() // ah ok, dashboard oauth
// ill make a env
const CLIENT_ID = ''
const CLIENT_SECRET = process.env.client_secret /*this works*/
const redir = encodeURIComponent(`http://${process.env.PROJECT_DOMAIN}/dashboard/api/discord/callback`)
router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&respone_type=code&redirect_uri=${redir}`)
})// we got an error at main.js
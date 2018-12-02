const express = require('express');

const router = express.Router();

const CLIENT_ID = process.env.client_id;
const CLIENT_SECRET = process.env.client_secret;
const urlwithredirect = 'https://discordapp.com/api/oauth2/authorize?client_id=513129952527253504&redirect_uri=http%3A%2F%2Falexa-bot.glitch.me%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=identify%20guilds'

const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('../utils');

router.get('/callback', catchAsync(async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const code = req.query.code;
  const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${urlwithredirect}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
      },
    });
  const json = await response.json();
  res.redirect(`/?token=${json.access_token}`);
}));// brb gonna take shower and get lunch
module.exports = router;
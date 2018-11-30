module.exports.run = async (bot, message, args, placeholder, queue) => {
  const serverQueue = queue.get(message.guild.id)
  // let vc = message.member.voiceChannel
  if (!serverQueue) return message.channel.send("There isn't any music queued!")
  if(!message.member.voiceChannel) return message.channel.send("You're not in a voice channel")
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("You're not in the same voice channel!");
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end('Left the voice channel!');
  return message.channel.send('Left the voice channel!');
  // despacito
  // no despacito - Jay
}
module.exports.help = {
  name:"leave",
  helpn: "Help",
  description: "Leave voice-channel"
  
}
module.exports.run = async (bot, message, args, placeholder, queue) => {
  var songQueue = queue.get(message.guild.id)
  if (!songQueue) return message.channel.send('There is no music playing!');
  if (!message.member.voiceChannel) return message.channel.send('You need to be in a voice channel to skip music!');
  if (songQueue.songs.length < 0) return message.channel.send("This is the last song in the queue.")
  songQueue.connection.dispatcher.end('Someone has skipped the song! It worked like a breeze!');
// how long you've been developing bots for? anyways, let's test the 
}


module.exports.help = {
  name: 'skip',
  helpn: 'Skip',
  description: 'Skip songs like a breeze!'
}
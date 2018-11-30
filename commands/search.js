const Discord = require('discord.js')
const ytdl = require('ytdl-core')
const YouTube = require('simple-youtube-api')
const youtube = new YouTube('AIzaSyAHWRImxL8wF4bYTwj4cE4o0jIy4hJx21E')

module.exports.run = async (bot, message, args, placeholder, queue) => {
  
  
  const searchString = args.slice(0).join(' ');
  const url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
  if (!searchString) return message.channel.send("`ERROR` Please input a search string/URL to play!")
  const vc = message.member.voiceChannel;
  if (!vc) return message.channel.send('`ERROR` You aren\'nt in a voice channel so i couldn\'t connect to the channel!')
  const permissions = vc.permissionsFor(message.client.user);
  if (!permissions.has('CONNECT')) {
    return message.channel.send('`ERROR` I couldn\'t connect to the voice channel as I do not have the permission: `CONNECT`. If you believe this is an error, join the support guild.');
  }
  if (!permissions.has('SPEAK')) {
    return message.channel.send('`ERROR` I cannot speak in the voice channel as I do not have the permission: `SPEAK`. If you believe this is an error, join the support guild.');
  }
  if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
    const playlist = await youtube.getPlaylist(url);
    var videos = await playlist.getVideos(); 
    for (const video of Object.values(videos)) {
      const video2 = await youtube.getVideoByID(video.id); // function will be made
      await handleVideo(video2, message, vc, true);
    }
    return message.channel.send('message that ${playlist.title} was added');
  }
  else {
    try {
      var video = await youtube.getVideo(url);
    } 
    catch (error) {
      try {
        var videos = await youtube.searchVideos(searchString, 10); // where the limit of 10 is involved for results, k
        let index = 0;
       
        let avatar = message.author.displayAvatarURL;
        let searchresults = new Discord.RichEmbed()
        .setAuthor(`Search results for: ${searchString}`, avatar) 
        .setColor("#29b0ff")
        .setDescription(videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n'))
        .setFooter('Provide a number of 1 to 10 for song selection.');
        message.channel.send(searchresults);
        try {
          var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11 && message.author == message2.author, {
            maxMatches: 1,
            time: 100000,
            errors: ['time']
          })
        } catch (err) {
          bot.errMsg(err.stack)
          console.warn(err)
          return message.channel.send("`ERROR` Command is not working properly. Developers have been notified.")
        }//
        var videoIndex = parseInt(response.first().content); // edit
        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
      } 
      catch (err) {
        bot.errMsg(err.stack)
        console.error(err);
        return message.channel.send('`Something went wrong. Please try again later.`');
      }
    }
    return handleVideo(video, message, vc);
 }
    function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
    const dispatcher = serverQueue.connection.playStream(ytdl(`${song.url}`, { filter: 'audioonly' }))
      .on('end', reason => {
        if (reason === 'Stream is not generating quick enough.');
        else console.log(reason);
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
    .on('error', error => console.error(error));
   dispatcher.setVolumeLogarithmic(2 / 5);
  
  const embed = new Discord.RichEmbed()
    .setTitle('Now Playing')
    .setDescription(`[${song.title}](${song.url})`)
    .setFooter('Requested by: ' + song.requester + " || Length (Seconds): " + song.length);
  serverQueue.textChannel.send(embed);
  // nearly. I just gotta make the server queue. Should move it inside the execute function then pass the queue "const queue = new Map();" through the command handler
  // unless you want the command to be the only one that has the server queue stated.
  // alright. We'll have to move the two functions inside the execute function.
  // Oh wait x-x
  // for currently playing, it'll be serverQueue.songs[0].title
  // you can try to fill up the rest
  // so serverQueue will be declared in each command related to queue as "const serverQueue = queue.get(message.guild.id);"  then you would serverQueue.songs.map(songs => songs.title) //oh. okay
  //would it be queue.songs.map(s => s.title) <-- viewqueue.js
  // nah, we can use the queue for other commands. pass through handler, and I'll work on the viewqueue command
  }

    async function handleVideo(video, message, vc, playlist = false) {
    const serverQueue = queue.get(message.guild.id); // will be defined for server queue to work
    const song = {
      id: video.id,
      title: video.title,
      url: `https://www.youtube.com/watch?v=${video.raw.id}`,
      requester: message.author.username,
      length: video.durationSeconds
    };
    if (!serverQueue) {
      const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: vc,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
      queue.set(message.guild.id, queueConstruct);
    
      queueConstruct.songs.push(song);
//
      try {
        const connection = await vc.join();
        queueConstruct.connection = connection;
        play(message.guild, queueConstruct.songs[0]);
      }
      catch (error){
        console.error(`I could not join the voice channel: ${error.stack}`);
        queue.delete(message.guild.id);
        return message.channel.send('`Something went wrong try again later.`');
      }
    }
    else {
      serverQueue.songs.push(song);
      console.log(serverQueue.songs);
      if (playlist) return undefined;
      else return message.channel.send(`${song.title} has been added to the queue!`);
    }
    return undefined;
  }
  
  let errorss = console.error()
  
  if(errorss) return message.channel.send(errorss)
}

module.exports.help = {
  name: "search",
  helpn: "Search",
  description:"Search n' play!"
}
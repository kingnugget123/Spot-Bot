const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong haha you suck');

       }
     else if(message.content === '?android'){
    
        if(message.channel.id === '745787684739612693'){
        var AndroidChannel = client.channels.find(channel => channel.id === `745787421056172093`)
        AndroidChannel.send(message)
        message.channel.send("Sent for moderation!")
        }
      else{
    message.channel.send('You cannot do that here!')
      }
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

const Discord = require('discord.js');

const client = new Discord.Client();

 var ModerationChannel = client.channels.find(channel => channel.id === `746339469178699886`)

// Advertisement Channels
var AndroidAds = client.channels.find(channel => channel.id === `745787421056172093`)
var IosAds = client.channels.find(channel => channel.id === `745787459513745428`)
var PcAds = client.channels.find(channel => channel.id === `745787495098351696`)
var OtherAds = client.channels.find(channel => channel.id === `745787545719144518`)

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong haha you suck');

       }
     else if(message.content.startsWith('?android')){
      
        if(message.channel.id === '745787684739612693'){
         
        if(message.content.length >= 50){
        message.reply('Advertisement was sent for approval, Please be patient.')
        }
         else
         {
          message.channel.send("Advertisement must be 50 characters +")
         }
        }
      else{
    message.channel.send('You cannot do that here!')
      }
    }

});




    client.on('messageReactionAdd', (reaction, user) => {
        if(reaction.message.channel.id === ModerationChannel.channel.id){
        var message = reaction.message.content
        delete(reaction.message.content)

        if(message.substring(0, 8) == '?android'){
            message = message.substring(8)
            AndroidAds.send(message)
        }
        }
    })

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
const ModerationChannel = client.channels.find(channel => channel.id === `746339469178699886`)
 
 
    if(message.author.bot) return;
    if (message.content === 'ping') {

       message.reply('pong haha you suck');

       }
     else if(message.content.startsWith('?android')){
      
        if(message.channel.id === '745787684739612693'){
         
        if(message.content.length >= 50){
        message.reply("Advertisement was sent for approval, Please be patient.");
        ModerationChannel.send(message.content).then(async msg => {
        await msg.react("✔");
        await msg.react("❌");
}
}
        }
         else
         {
          message.channel.send("Advertisement must be 50+ characters");
         }
        }
      else
      {
    message.channel.send('You cannot do that here!');
      }
    }

});




    client.on('messageReactionAdd', (reaction, user) => {
     // Advertisement Channels
const AndroidAds = client.channels.find(channel => channel.id === `745787421056172093`);
const IosAds = client.channels.find(channel => channel.id === `745787459513745428`);
const PcAds = client.channels.find(channel => channel.id === `745787495098351696`);
const OtherAds = client.channels.find(channel => channel.id === `745787545719144518`);

 var ModerationChannel = client.channels.find(channel => channel.id === `746339469178699886`);

       if(reaction.message.channel.id === '746339469178699886'){
       if(reaction.emoji.name === "✔"){
        var message = reaction.message.content;
        reaction.channel.message("Submission Approved!");
                   delete(reaction.message);

        if(message.substring(0, 8) == '?android'){
            message = message.substring(8);
            AndroidAds.send(message);
        }
        }
            else if(reaction.emoji.name === "❌"){
                reaction.channel.message("Submission Deleted!");
                                delete(reaction.message);
            }
        }
    })

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

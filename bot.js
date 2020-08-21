const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
const ModerationChannel = client.channels.find(channel => channel.id === `746339469178699886`)
 
 
    if(message.author.bot) return;

    if (message.content === 'ping') 
    {
       message.reply('pong haha you suck');
    }


else if(message.content.startsWith("?android"))
{

if(message.channel.id === '745787684739612693')
{

if(message.content.length >= 50)
{

message.reply('Sending advertisement for review.')
ModerationChannel.send(message.content).then(async msg => {
    await msg.react("✅");
    await msg.react("❌");
    });
}
else
{
message.reply('Advertisements need to be 50+ characters in length.');
message.delete();
}


}
else 
{

    message.reply('Cannot advertise here, sorry.');
    message.delete();
}
}
});



client.on('messageReactionAdd', (reaction, user) =>{


if(user.bot) return;

const AndroidAds = client.channels.find(channel => channel.id === `745787421056172093`);
const IosAds = client.channels.find(channel => channel.id === `745787459513745428`);
const PcAds = client.channels.find(channel => channel.id === `745787495098351696`);
const OtherAds = client.channels.find(channel => channel.id === `745787545719144518`);

if(reaction.channel.id === '746339469178699886')
{

    AndroidAds.message("REACTION");

if(reaction.emoji.name === '✅')
{
var newmessage = reaction.message.content;
reaction.channel.message("Approved Submission!");

    if(newmessage.startsWith("?android"))
    {

    AndroidAds.message(newmessage.toString().substring(8))

    reaction.message.delete();

    }

}

else if(reaction.emoji.name == '❌')
{

    reaction.message.delete();
    reaction.channel.message("Removed Submission!");

}
}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

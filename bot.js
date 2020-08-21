const Discord = require('discord.js');

const client = new Discord.Client();

const ModerationChannel = client.channels.find(channel => channel.id === `746339469178699886`);
const AndroidAds = client.channels.find(channel => channel.id === `745787421056172093`); 
const IosAds = client.channels.find(channel => channel.id === `745787459513745428`); 
const PcAds = client.channels.find(channel => channel.id === `745787495098351696`); 
const OtherAds = client.channels.find(channel => channel.id === `745787545719144518`);

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
 
 
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

if(reaction.channel.id == ModerationChannel.channel.id){

    if(user.bot) return;

    if(reaction.emoji.name == "✅")
    {
        console.log("tick emoji!")
        reaction.message.delete();
    }
}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

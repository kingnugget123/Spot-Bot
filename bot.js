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


await reaction.channel.send("Big sad");



});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

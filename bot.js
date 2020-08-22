const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', msg => {

   const commandchannel = client.channels.cache.get('746507960791859370');
   const moderationchannel = client.channels.cache.get('746339469178699886');

   if(msg.author.bot) return;

if(msg.content.startsWith('ping')) {

   msg.reply('Pong!, you guys treat me like scum');
   msg.react('🏓');
}

 
console.log(msg.channel.id);
if (msg.channel.id === commandchannel.id) {

if(msg.content.startsWith('?android') | msg.content.startsWith('?ios') | msg.content.startsWith('?pc') | msg.content.startsWith('?other')) {


if(msg.content.length >= 10) {



   msg.reply('Sent your advertisement for manual approval, Please be patient.');
   let messagewithoutcategory;
   let adcategory;

   if(msg.content.substring(0, 8) == '?android') {
      adcategory = msg.content.substring(0, 8);
      messagewithoutcategory = msg.content.substring(8);
   }
  else if(msg.content.substring(0, 4) == '?ios') {
      adcategory = msg.content.substring(0, 4);
      messagewithoutcategory = msg.content.substring(4);
   }
  else if(msg.content.substring(0, 3) == '?pc') {
      adcategory = msg.content.substring(0, 3);
      messagewithoutcategory = msg.content.substring(3);
  }
   else if(msg.content.substring(0, 6) == '?other') {
      adcategory = msg.content.substring(0, 6);
      messagewithoutcategory = msg.content.substring(6);
   }
   let AdvertisementPost = new Discord.MessageEmbed();
   AdvertisementPost = new Discord.MessageEmbed().setAuthor('By ' + msg.author.tag).setDescription(messagewithoutcategory).setTitle(adcategory);
   moderationchannel.send(AdvertisementPost).then(async messageto => {

await messageto.react('✅');
await messageto.react('❌');
await channel.messages.fetch({ limit: 50 }).then(messages => console.log(`Received ${messages.size} messages`)).catch(console.error);

// error

   });



}
else {

   msg.reply('Sorry, your message needs to be at least 10 letters long.');

}

}
}
else if(msg.content.startsWith('?android') | msg.content.startsWith('?ios') | msg.content.startsWith('?pc') | msg.content.startsWith('?other') && msg.channel.id != commandchannel.id) {
   msg.reply('Cannot advertise here!');
   msg.delete();
}
});



client.on('messageReactionAdd', react => {

const AndroidChannel = client.channels.cache.get('745787421056172093');
const iosChannel = client.channels.cache.get('745787459513745428');
const PcChannel = client.channels.cache.get('745787495098351696');
const OtherChannel = client.channels.cache.get('745787545719144518');
const guildid = client.guilds.cache.get('745787068843688017');
const moderationchannel = client.channels.cache.get('746339469178699886');


console.log(react.emoji.name);
console.log(react.message.content);

if(!react.message.channel.id == moderationchannel.id) return;
console.log('Correct Channel');

if(react.count <= 1) return;

if(react.emoji.name === '✅') {
react.message.channel.send('```Approved Submission```');
const category = react.message.embeds[0].title;
console.log(react.message.embeds[0].title);
let AdvertisementPost = new Discord.MessageEmbed();
AdvertisementPost.setDescription(react.message.embeds[0].description);
AdvertisementPost.setAuthor(react.message.embeds[0].author.name);

if(category == '?android') {

   AdvertisementPost.setTitle('Android Game');
   AdvertisementPost.setFooter('tags: ?android');
   AdvertisementPost.setColor('#00d166');
   AndroidChannel.send(AdvertisementPost);
}
else if(category == '?ios') {

   AdvertisementPost.setTitle('IOS Game');
   AdvertisementPost.setFooter('tags: ?ios');
   AdvertisementPost.setColor('#a652bb');
   iosChannel.send(AdvertisementPost);
}
else if(category == '?pc') {
   AdvertisementPost.setTitle('PC Game');
   AdvertisementPost.setFooter('tags: ?pc');
   AdvertisementPost.setColor('#f8c300');
   PcChannel.send(AdvertisementPost);
}
else if(category == '?other') {
   AdvertisementPost.setTitle('Other Advertisement');
   AdvertisementPost.setFooter('tags: ?other');
   AdvertisementPost.setColor('#0099e1');
   OtherChannel.send(AdvertisementPost);
}

   react.message.delete();

}
else if(react.emoji.name === '❌') {
   
   react.message.channel.send('```Submission Deleted```');
   react.message.delete();
}
});
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

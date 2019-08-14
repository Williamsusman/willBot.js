const Discord = require('discord.js');
const client = new Discord.Client();
const math = require ('math.js');
const search = require ('yt-search');
const antispam = require("discord-anti-spam");


//antispam code https://github.com/Michael-J-Scofield/discord-anti-spam/blob/master/anti_spam.js
//antispam
antispam(client, {
interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
warningMessage: "Stop spamming! ", // Warning message send to the user indicating they are going to fast.
banMessage: "has been banned for spamming, anyone else? ", // Ban message, always tags the banned user in front of it.
maxDuplicatesWarning: 3,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
maxDuplicatesBan: 100, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
deleteMessagesAfterBanForPastDays: 3 // Delete the spammed messages after banning for the past x days.


});

//input command starts


client.on('message', function(message,member) {

var d = new Date ();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var tod = ""




if (message.content === '::help') {
message.channel.send('commands: bot.Dice, bot.8Ball, gn, Clear.Chat, =f, Server.Rules, bot.Time')
console.log(message.author.username + ' used help command')



}else if (message.content === 'bot.Dice'){
var replies = ['1','2','3','4','5','6']
var result = math.floor((math.random() * replies.length));
var diceAnswer = replies[result]
message.channel.send('It rolled a '+diceAnswer);
console.log(message.author.username +' Used the dice') 

}else if (message.content === 'bot.8ball' + ''){
var replies = ['It is certain.','It is decidedly so.','Without a doubt.','Yes - definitely.','You may rely on it.','As I see it, yes.','Most likely.','Outlook good.','Yes.','Signs point to yes.','Reply hazy, try again','Ask again later.','Better not tell you now.','Cannot predict now.','Concentrate and ask again.','Dont count on it.','My reply is no.','My sources say no.','Outlook not so good.','Very doubtful.']
var result = math.floor((math.random() * replies.length));
var eightBallAnswer = replies[result]
message.channel.send(eightBallAnswer); 

}else if (message.content === 'gn' ){
message.channel.send('Good Night')

}else if(message.content === 'Clear.Chat'){


if (message.channel.type == 'text') {


message.channel.fetchMessages().then(messages => {
message.channel.bulkDelete(messages);
messagesDeleted = messages.array().length; // number of messages deleted

// Logging the number of messages deleted on both the channel and console.
message.channel.send("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
}).catch(err => {
console.log('Error while doing Bulk Delete');
console.log(err);
})
}

}else if(message.content === '=f'){
message.reply('Payed respects')
}else if(message.content === "Server.rules"){
message.member.send("Rules: ")





}else if (message.content === "bot.Time"){

if(h > 12){
tod = "pm"
h = h - 12

}else{
tod="am"
}

if(m < 10){
message.channel.send('The current time is '+ h +':0'+ m +":"+s+ " " + tod)

}else if (m > 10){

message.channel.send('The current time is '+ h +':'+ m +":"+ s + " "+tod)
}

}else if (message.content === "bot.Gif") {

let gif = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
let api = "http://api.giphy.com/v1/gifs/search?";
let apiKey = "api_key=95Hx9tKmZ5G7L3me8VJ387du9kCh7qPw";
let query = "&q=";
let url = api+apiKey+query+gif;
let data = ""
let http = require('http');
http.get(url, (resp) => {
resp.on('data', (chunk) => {
data += chunk;
});
resp.on('end', () => {
let parsed = (JSON.parse(data));
message.channel.send(parsed.data[(Math.floor(Math.random()*parsed.data.length))].url);
});
}).on("error", (err) => {
console.log("Error: " + err.message);
});
}else if(message.isMentioned(client.user)){


var botReplies = ['Fuck Off','The fuck you say to me lil bitch!','Thats why ur dad left','if u dont get ur dust bunny headass tf outta here','go put some lotion on crusty ass basically white headass','Thats why your genitals are more butchered than a dead cow','no u','catch me in the alley with the butt sucking bums and then talk shit','Don’t feel bad, there are many people who have no talent!','As an outsider, what do you think of the human race?','I’d like to kick you in the teeth, but why should I improve your looks?','At least there’s one thing good about your body – it’s not as ugly as your face.','Brains aren’t everything. In fact, in your case they’re nothing.','Did your parents ever ask you to run away from home?','Keep talking – someday you’ll say something intelligent','Dont you love nature, you know beside what it did to you']
var result = math.floor((math.random() * botReplies.length));
var botAnswer = botReplies[result]
message.reply(botAnswer)
}else if(message.content === 'bot.RussianRullet'){
var rulletReplies = ['Ha you died','You got lucky this time','You live to see another day','Your skull remains intact','You lived','Ha you got shot.... oh wait no thats just how your face looks']
var result = math.floor((math.random() * rulletReplies.length));
var rulletAnswer = rulletReplies[result]
message.reply(rulletAnswer)

}//else if(message.content === 'Pass my ban hammer'){
// let adminRole = member.guild.roles.find("name", "Master Shrek");

//if(message.member.roles.has(adminRole)){
//message.reply("Here it is " + download.jpg)
//}else{
//message.reply('You dont have permissions for that tool!')
//}

else if(message.content === 'Cheif do it be like that?'){
var cheifReplies = ['It do be like that!' , 'Cheif said it dont be like that']
var cheifResult = math.floor((math.random()* cheifReplies.length));
var cheifAnswer = cheifReplies[cheifResult]
message.channel.send(cheifAnswer)
} 





});


























client.on("guildMemberAdd", function(member)
{
member.send("Welcome to our server! Get ready to see some crazy stuff! This was an automated message and will explode in 10 seconds!");
let memberRole = member.guild.roles.find("name", "Member Shreks")
member.addRole(memberRole)



});

client.on('ready', function(user,message) {

//This will set the bots activity e.i. Will Bot playing in traffic
client.user.setActivity("with fire",{type: "PLAYING"}); 


// This event will run if the bot starts, and logs in, successfully.
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 







});



//Login using bot key
client.login("NDkyNTM3ODY4NTIzMTQzMTY5.XUyqIg.7ziKt1JpmNLI6Mcls8-REclZiYA")


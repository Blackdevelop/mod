const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: process.env.token,
  prefix: process.env.prefix,
  intents: "all"
})
bot.status({
  text: "The1Gangister",
  type: "PLAYING",
  status: "dnd",
  time: 12
})
//Events
bot.onMessage()
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")
//variables
bot.variables({
Afk: "no", 
AfkSebep: "",
bakım: "yes",
linkengel: "0",
kf: "no", 
saas: "no",
mute: "no", 
mutel: "", 
muter: "",
renk: "FFFFFF",
taglog:"0",
  tagrol:"0",
  tag:"",
lengel: "0",
lnklog: "0",
msgID: "",
snipe: "",
snipek: "",
snipekk: "",
klog: "1012029193283969094"
})
const express = require('express');
const app = express()
app.get("/",(req,res) =>{
  res.send("7/24 Aktif!")
})
app.listen(8080)
const { joinVoiceChannel } = require('@discordjs/voice');
    bot.on('ready', () => { 
        joinVoiceChannel({
        channelId: "1010553599748747364",
        guildId: "935610111228018758",
        adapterCreator: bot.guilds.cache.get("935610111228018758").voiceAdapterCreator
        });
});
bot.onMessageDelete()
bot.deletedCommand({
  channel: "$channelID", 
  code:`
$setUserVar[snipe;$message]
$setUserVar[snipek;$channelUsed]
$setUserVar[snipekk;$authorID]
`
})

bot.command({
  name: "snipe",
  aliases: ["yakala"],
  code:`
$color[1;RANDOM]

$title[1; 🛰️ | Silinen Mesaj bulundu ]

$description[1;**
••> Kanal: <#$getUserVar[snipek]>

••> Silen kişi: <@$getUserVar[snipekk]> 

••> Silinen mesaj: 

\`\`\`
$getUserVar[snipe]
\`\`\`

**] 

$footer[1;$userTag aradı;$authorAvatar]
$thumbnail[1;$userAvatar[$getUserVar[snipekk]]]
$addtimestamp[1]
$onlyPerms[managemessages;Bunun İçin \`mesajları yönet\` yetkisine sahip olmalısın] 
$onlyBotPerms[managemessages;botun mesajları yönetme izni yok] 

`
}) 
bot.onInteractionCreate()
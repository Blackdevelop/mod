module.exports = { name: "kick", aliases: ["fırlat","uçur"], code: `$kick[$mentioned[1;no];$guildID;$noMentionMessage] $channelSendMessage[$channelID;**__$userTag[$mentioned[1;no]]__**SunucudanAtıldı!$useChannel[$getServerVar[klog]]$author[1;Arkadaş Ebesine Uçuyor...;$authorAvatar] $description[1; 
**Fırlatan Yetkili** <@$authorID> - (\`$authorID\`) 

**Fırlatılan Üye**<@$mentioned[1;no]> - (\`$mentioned[1;no]\`) 

**Fırlatılma Sebebi**\`$noMentionMessage\`] 

$footer[1;Kullanan: $username] $addTimestamp[1] $onlyIf[$mentioned[1;no]!=undefined;Sunucudan Fırlatıcak Bir Üye Belirt!] $onlyPerms[ban;Bunun İçin \`Üyeleri Yasakla\` İzinin Olmalı!] $onlyBotPerms[ban;Bunun İçin \`Üyeleri Yasakla\` İzinim Olmalı!]
$thumbnail[1;$serverIcon]
` }  
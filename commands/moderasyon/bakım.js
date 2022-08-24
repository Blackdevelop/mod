module.exports = [{
name:"bakım",
code:`
$color[1;RANDOM]
$author[1;Bakım Sistemi;$authorAvatar]
$description[1;
Bakım modunu kullanmak için aşağıdaki butonları kullanmalısın.]

$addButton[1;Bakım aç;1;bakım aç;no;✅]
$addButton[1;Bakım kapat;1;bakım kapat;no;❎]
$onlyForIDs[$botOwnerID; {newEmbed:{author:$userTag:$authorAvatar}{description:❌ <@$authorID>, bu komutu sadece bot sahibi kullanabilir.}{color:RANDOM}}] 
`
},{
name:"bakım aç",
type:"interaction", 
prototype:"button",
code:`
$color[1;RANDOM]
$author[1;Bakım Sistemi;$authorAvatar]
$description[1;
Bot başarıyla bakıma alındı.]
$setGlobalUserVar[bakım;no]
$onlyIf[$getGlobalUserVar[bakım;$authorID]!=no;{newEmbed:{author;$userTag:$authorAvatar}{description:❌ <@$authorID>, bot zaten bakımda.}{color:RANDOM}}]
$onlyForIDs[$botOwnerID;]
$suppressErrors 
`
},{
name:"bakım kapat",
type:"interaction",
prototype:"button",
code:`
$color[1;RANDOM]
$author[1;Bakım Sistemi;$authorAvatar]
$description[1;
Bot başarıyla bakımadan çıktı.]
$setGlobalUserVar[bakım;yes]
$onlyIf[$getGlobalUserVar[bakım;$authorID]!=yes;{newEmbed:{author;$userTag:$authorAvatar}{description:❌ <@$authorID>, bot zaten bakımda değil.}{color:RANDOM}}]
$onlyForIDs[$botOwnerID;]
$suppressErrors 
`}]  

$onlyIf[$getGlobalUserVar[bakım;$authorID]!=no; Bot Bakımdadır.]    
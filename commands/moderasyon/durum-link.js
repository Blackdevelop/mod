module.exports=[{
  name:"durum-link", 
  $if:"v4", 
  code:`
$if[$message[1]==]
Aç veya kapat yazmalısın. 
$else 
$if[$message[1]==aç]
$author[1;Başarıyla Açıldı;$userAvatar[$authorID]]
$color[1;16FF00]
$description[1;Biri durumuna link koyarsa \`$channelName[$mentionedChannels[1]]\` kanalına ismini, etiketini ve durumunun linkini atacağım] 
$setServerVar[lnklog;$mentionedChannels[1]]
$onlyIf[$isMentioned[$mentionedChannels[1]]!=false;Sistemi ayarlamak için kanal etiketlemen gerekiyor.]
$else 
$if[$message[1]==kapat]
$author[1;Başarıyla Kapatıldı]
$color[1;FFFFFF]
$description[1;Biri duruma link koyarsa loga bilgilendirme mesajı atmayacağım.]
$setServerVar[lnklog;0]
$onlyIf[$getServerVar[lnklog]!=0;Bu sistem zaten aktif edilmemiş.]
$else 
$endif 
$endif 
$endif 
$onlyPerms[admin;Bunun için yönetici iznine ihtiyacın var.]
`
},{
name:"$alwaysExecute", 
  code:`
$forEachMember[5s;{};durumlink;]
$serverCooldown[1h;]
$onlyIf[$getServerVar[lnklog]!=0;]
`
},{
  name:"durumlink", 
  $if:"v4", 
  type:"awaited", 
  code:`
$if[$checkContains[$getCustomStatus;https;https://;www.;.com;.tr]==true]
$channelSendMessage[$getServerVar[lnklog];{newEmbed:{color:FF0000}{author:Kullanıcıda link buldum $username[$authorID]:$userAvatar[$authorID]}{description:
__Kullanıcı__
\`$userTag[$authorID] ($authorID)\`
__Link__
$getCustomStatus[$authorID]}}]
$else 
$endif 

`
}]
module.exports=[{
  name: "mute-sistemi", 
  $if: "v4", 
  code:`
$if[$message[1]==]
Aç veya Kapat yazmalısın. 
$else 
$if[$message[1]==aç]
$title[1;Sistem Açıldı]
$description[1;Mute sistemi aktif edildi. 
Log: <#$mentionedChannels[1]>
Rol: <@&$mentionedRoles[1]>]
$color[1;$getglobaluservar[renk]]
$setServerVar[mute;yes]
$setServerVar[mutel;$mentionedChannels[1]]
$setServerVar[muter;$mentionedRoles[1]]
$onlyIf[$isMentioned[$mentionedRoles[1]]==true;kullanıcılara mute vericek yetkili rolünü etiketle.]
$onlyIf[$serverChannelExists[$mentionedChannels[1]]!=false;belirtilen kanal bu sunucuda yok.]
$onlyIf[$isMentioned[$mentionedChannels[1]]==true;log kanalı belirtmelisin.]
$onlyIf[$getServerVar[mute]!=yes;sistem zaten aktif] 
$else 
$if[$message[1]==kapat]
$title[1;Sistem Kapatıldı]
$description[1;Mute sistemi kapatıldı artık yetkililer kimseyi susturamayacak.]
$color[1;$getglobaluservar[renk]]
$resetServerVar[mute]
$resetServerVar[mutel]
$resetServerVar[muter]
$onlyIf[$getServerVar[mute]!=no;sistem zaten aktif değil.]
$else 
$endif 
$endif 
$endif 

`
},{
  name: "mute", 
  $if: "v4", 
  code:`
$if[$findNumbers[$message[1]]==]
Lütfen zaman kavramlarını kullan. \`d/h/m/s\` 
$else 
$if[$checkContains[$checkCondition[$findChars[$message[1]]==s]$checkCondition[$findChars[$message[1]]==m]$checkCondition[$findChars[$message[1]]==h]$checkCondition[$findChars[$message[1]]==d];true]==false]
Süreyi belirtirken zaman kavramlarını kullan. \`!mute 15s @etiket küfür\`
$else 
$channelSendMessage[$getServerVar[mutel];{newEmbed:{title:Mute}{description:<@$authorID> adlı yetkili <@$mentioned[1]> adlı kullanıcıyı \`$message[1]\` süresince susturdu.
Susturulma Sebebi: \`$messageSlice[2]\`}{color:FFFFFF}}]
$title[1;Susturuldu]
$description[1;<@$mentioned[1]> adlı kullanıcı \`$message[1]\` süresince <@$authorID> tarafından susturuldu]
$color[1;$getglobaluservar[renk]]
$let[zaman;$timeoutMember[$guildID;$mentioned[1];$message[1];yes;$messageSlice[2]]]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];<@$authorId> mutelemek istediğin kullanıcı senden üst yetkiye sahip]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];<@$authorId> mutelemek istediğin kullanıcı benden üst yetkiye sahip]
$onlyIf[$message[3]!=;bir sebep belirt.]
$onlyIf[$hasPerms[$guildID;$mentioned[1];admin]!=true;Yönetici izni olan kişiler mutelenemez.]
$onlyIf[$userExists[$mentioned[1]]!=false;kullanıcı sunucuda yok.]
$onlyIf[$isBot[$mentioned[1]]!=true;mutelemek istediğin kişi bir bot.]
$onlyIf[$mentioned[1]!=$clientID;kendimi nasıl muteleyim.]
$onlyIf[$mentioned[1]!=$authorID;kendini muteleyemezsin.]
$onlyIf[$isMentioned[$mentioned[1]]==true;<@$authorID> mute vermek istediğin kullanıcıyı etiketle.]
$onlyIf[$findChars[$message[1]]!=;Lütfen zaman kavramlarını kullan. \`1d/1h/1m/1s\`]
$onlyForRoles[$getServerVar[muter];bunu sadece mute yetkilisi için ayarlanan rol yapabilir.]
$onlyIf[$getServerVar[mute]!=no;Mute sistemi kapalı]
$endif 
$endif 
`
  
}]  
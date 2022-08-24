module.exports=[{
name:"tag-rol", 
$if:"v4", 
code:`
$if[$message[1]==]
Aç veya kapat yazmalısın.
$else
$if[$message[1]==aç]
$author[1;Başarıyla Açıldı;$userAvatar[$authorID]] 
$description[1;Tag rol sistemi başarıyla açıldı.Tag \`$message[2]\` olarak ayarlandı.Rol: \`$roleName[$getServerVar[tagrol]]\` log kanalı ise \`$channelName[$getServerVar[taglog]]\` olarak ayarlandı.]
$color[1;16FF00]
$setserverVar[tag;$message[2]]
$setserverVar[taglog;$message[3]]
$setserverVar[tagrol;$message[4]]
$onlyIf[$roleExists[$message[4]]!=false;böyle bir rol bulunamadı.]
$onlyIf[$message[4]!=;Lütfen bir rol ID'si belirt.]
$onlyIf[$channelExists[$message[3]]!=false;Böyle bir kanal sunucuda bulunamadı.]
$onlyIf[$isNumber[$message[3]]!=false;Lütfen kanal ID'sini veriniz.]
$onlyIf[$message[3]!=;Lütfen bir kanal ID'si belirtin.]
$onlyIf[$message[2]!=;Lütfen tagınızı belirtiniz.]
$else 
$if[$message[1]==kapat]
$author[1;Başarıyla Kapatıldı;$userAvatar[$authorID]] 
$description[1;Tag rol sistemi başarıyla kapatıldı sistem sıfırlandı.]
$color[1;FF0000]
$setserverVar[tag;] 
$setserverVar[taglog;0]
$setServerVar[tagrol;0]
$onlyIf[$getServerVar[taglog]!=0;Bu sistem zaten daha önce ayarlanmamış.]
$else
$endif 
$endif 
$endif 
$onlyPerms[admin;Bu sistemi aktif etmek için yönetici iznine sahip olmalısınız.]
`
 },{
  name:"$alwaysExecute", 
  $if:"v4", 
  code:`
$if[$checkContains[$userTag[$authorId];$getServerVar[tag]]==true]
$giveRole[$guildID;$authorId;$getServerVar[tagrol]]
$channelSendMessage[$getServerVar[taglog];$userTag[$authorID] adlı kullanıcı tag aldığı için ona rol verdim.]
$onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[tagrol]]!=true;]
$else
$takeRole[$guildID;$authorId;$getServerVar[tagrol]]
$channelSendMessage[$getServerVar[taglog];$userTag[$authorID] adlı kullanıcı tagımızı bıraktığı için rolünü aldım.] 
$onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[tagrol]]!=false;]
$endif 
$onlyIf[$getServerVar[taglog]!=0;]
`
}
]
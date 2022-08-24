module.exports =[{
  name: "ban", 
  code:`
$ban[$guildID;$mentioned[1];0;$noMentionMessage]
$title[1;Banlandı]
$description[1;\`$userTag[$mentioned[1]]\` sunucudan  \`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Sebep Belirtilemedi.];false;$noMentionMessage]\` sebebi ile banlandı] 
$color[1;FFFFFF]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];<@$authorId> banlamak istediğin kullanıcı senden üst yetkiye sahip]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Botun Rolü Banlanıcak Kişiden Düşük]
$onlyIf[$memberExists[$mentioned[1]]!=false;kullanıcı sunucuda yok]
$onlyIf[$charCount[$noMentionMessage]<=100;Bu Kadar uzun bir sebep yazamazsın] 
$onlyIf[$mentioned[1]!=$clientID;kendimi nasıl banlayayım.]
$onlyIf[$mentioned[1]!=$authorID;kendini banlayamazsın.]
$onlyIf[$isMentioned[$mentioned[1]]==true;birini etiketlemelisin.]
$onlyBotPerms[ban;botun banlama yetkisi yok]
$onlyPerms[ban;kullanıcıları banlama Yetkin Yok ]
`
},{
  name: "unban", 
  code:`
$unban[$guildID;$message[1]] 
$title[1;Ban Açıldı]
$description[1;<@$authorID> \`$userTag[$message[1]]\` Adlı üyenin banını kaldırdı]
$color[1;FFFFFF]
$onlyIf[$isBanned[$guildID;$message[1]]!=;false;Bu Kullanıcı Sunucudan Banlanmamış]
$onlyIf[$userExists[$message[1]]!=false;böyle bir kullanıcı bulunamadı.] 
$onlyIf[$message[1]!=;sunucuda banlı bir kullanıcının ID'sini vermen gerekiyor.]
$onlyPerms[ban;Kullanıcıları banlama iznin olmalı.]
$onlyBotPerms[ban;botun kullanıcıları banlama izni olmalı.]


`
},{
 
name: "ban-sorgula", 
  code:`
$title[1;Ban Sorgu]
$description[1;\`$userTag[$message[1]]\` Adlı kullanıcı \`$replaceText[$replaceText[$checkCondition[$getBanReason[$guildId;$message[1]]==];true;Sebep belirtilmemiş];false;$getBanReason[$guildID;$message[1]]]\` sebebinden sunucuda banlı] 
$color[1;FFFFFF]
$onlyIf[$isBanned[$guildID;$message[1]]!=false;kullanıcı sunucuda banlı gözükmüyor.]
$onlyIf[$userExists[$message[1]]!=false;kullanıcıyı bulamadım.]
$onlyIf[$message[1]!=;kullanıcı etiketi vermelisin. ]
$onlyPerms[admin;Bunun için \`Yönetici\` iznine sahip olmalısın.]
`
}]
module.exports = [{
  name:"herkese-rol-ver",
  aliases:["hrv"],
  code:`
   **<@$authorID> Başarı İle Herekese \`$roleName[$mentionedRoles[1]]\` Adlı Rol Veriliyo**
  $forEachMember[1;{"herkeserolver": "$mentionedRoles[1]"};herkeserolver;]
  $onlyPerms[manageroles; **<@$authorID> Bu Komutu Kullanmak İçin \`Rolleri Yönet\` Yetkisine Sahip Olmalısın]
  $onlyBotPerms[manageroles;**Üzgünüm \`Rolleri Yönet\` Yetkim Olmdığı İçin İşlemi Gerçekleştiremiyorum**]
  $onlyIf[$mentionedRoles[1]!=undefined; **<@$authorID> Lütfen Bir Rol Etiketle**]
  `
},{
  name:"herkeserolver",
  type:"awaited",
  code:`
  $giveRole[$guildID;$authorID;$awaitData[herkeserolver]]
  `
},{
  name:"herkesten-rol-al",
  aliases:["hra"],
  code:`
  **<@$authorID> Başarı İle Herkesten \`$roleName[$mentionedRoles[1]]\` Adlı Rol Alınıyor (Uzun Sürebilir)**
  $forEachMember[1;{"herkestenrolal":"$mentionedRoles[1]"};herkestenrolal;]
  $onlyPerms[manageroles; **<@$authorID> Bu Komutu Kullanmak İçin \`Rolleri Yönet\` Yetkisine Sahip Olmalısın]
  $onlyBotPerms[manageroles; **Üzgünüm \`Rolleri Yönet\` Yetkim Olmdığı İçin İşlemi Gerçekleştiremiyorum**]
  $onlyIf[$mentionedRoles[1]!=undefined!=;**<@$authorID> Lütfen Bir Rol Etiketle**]
  `
},{
  name:"herkestenrolal",
  type:"awaited",
  code:`
  $takeRole[$guildID;$authorID;$awaitData[herkestenrolal]]
  `
}]  
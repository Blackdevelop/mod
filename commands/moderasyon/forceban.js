module.exports =[{
  name: "forceban", 
  code:`

$ban[$message[1];$guildid;7;Forceban]

$title[1;Force Ban]
$description[1; <@!$message[1]> kullanıcısı banlandı. 

Banlayan yetkili: <@!$authorID>]

$onlyIf[$authorID!=$message[1];Kendini Banlayamazsın.]

$onlyPerms[ban;Bu komutu kullanmaya yetkili değilsiniz.]

$onlyIf[$noMentionMessage!=;Lütfen ID giriniz]

`
}]
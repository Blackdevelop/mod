module.exports=[{
  name: "link-engel",
  aliases: ["linkengel"],
  $if: "v4", 
  code:`
$if[$message[1]==]
\`aç veya kapat yazmalısınız!\`
$else
$if[$message[1]==aç]
\`Link Engel sistemi başarılı bir şekilde aktif edildi!\`
$setServerVar[lengel;on]
$onlyIf[$getServerVar[lengel]!=on;\`Bu sistem daha önce zaten açılmış!\`]
$else 
$if[$message[1]==kapat] 
\`Link Engel sistemi başarılı bir şekilde kapatıldı!\`
$setServerVar[lengel;off]
$onlyIf[$getServerVar[lengel]!=off;\`Bu sistem daha önce zaten açılmamış!\`]
$else 
$endif
$endif 
$endif 
$onlyPerms[admin;\`Bu komutu kullanmak için "Yönetici" yetkisine ihtiyacın var.\`]
`
},{
  name:"$alwaysExecute", 
  $if: "v4", 
  code:`
$if[$checkContains[$toLowercase[$message];.gg;discord.gg;Discord.gg;.com;.net;.tk;www.]==true] 

$title[1;$customEmoji[guard] | Link Yasağı]

$description[1;**

<@$authorID>, bu sunucuda link atmak yasaktır.
**]
$footer[1;$userTag Uyarıldı;$authorAvatar]
$color[1;RANDOM]
$thumbnail[1;$serverIcon]
$addTimestamp[1]


$deleteIn[5s]
$deletecommand
$onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;] 
$onlyIf[$getServerVar[lengel]!=off;]
$else 
$endif 

`
}] 
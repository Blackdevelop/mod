module.exports = {
  name: "rol-ver",
  code: `
$thumbnail[1;$userAvatar]
$giveRole[$guildID;$mentioned[1];$mentionedRoles[1]]
$author[1;Rol Verildi]
$description[1;<@$mentioned[1;yes]> adlı kişiye <@&$mentionedRoles[1]> adlı rol başarılı bir şekilde verildi.]
$color[1;RANDOM]
$footer[1;$username]
$addTimestamp[1]
$onlyIf[$mentionedRoles[1;no]!=undefined;**$username** bir rol etiketleyin.]
$onlyIf[$mentioned[1;no]!=undefined;**$username** bir kişi etiketle.]
$onlyBotPerms[manageroles;**$username** bu komut için **ROLLERİ YÖNET** yetkimin olması gerek.]
$onlyPerms[manageroles;**$username** bu komut için **ROLLERİ YÖNET** yetkinin olması gerek.]
$suppressErrors[**$username** bir hata meydana geldi.]
`
}
module.exports = {
  name: "sil",
  code: `
$deleteIn[5s]
$clear[$message]
$thumbnail[1;$userAvatar]
$author[1;Mesajlar Silindi]
$description[1;**🚮┊$message** adet mesaj başarılı bir şekilde silindi.]
$color[1;RANDOM]
$footer[1;$username kullandı.]
$addTimestamp[1]
$onlyIf[$isNumber[$message]!=false;**$username** lütfen geçerli bir sayı yaz.]
$onlyBotPerms[managemessages;**$username** bu komut için **MESAJLARI YÖNET** yetkimin olması gerek.]
$onlyPerms[managemessages;**$username** bu komut için **MESAJLARI YÖNET** yetkinin olması gerek.]
$cooldown[3s;**$username** lütfen **3 saniye** sonra tekrar dene.]
`
}
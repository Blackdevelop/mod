module.exports ={
  name: "yavaş-mod", 
  $if:"v4", 
  code:`
  $if[$findNumbers[$message[1]]==]
Lütfen zaman kavramlarını kullan. \`1h/1m/1s\` 
$else 
$if[$checkContains[$checkCondition[$findChars[$message[1]]==s]$checkCondition[$findChars[$message[1]]==m]$checkCondition[$findChars[$message[1]]==h];true]==false]
Süreyi belirtirken zaman kavramlarını kullan. \`(prefix)yavaş-mod 15s\`
$else 
$slowMode[$message[1];$channelId]
$author[1;Yavaş Mod Aktif]
$color[1;FFFFFF]
$description[1;Yavaş mod süre \`$message[1]\` olarak ayarlandı]
$footer[1;$userTag[$authorID];$userAvatar[$authorID]]
$onlyIf[$findChars[$message[1]]!=;<@$authorId> yavaş mod süresi gir. \`(prefix)yavaş-mod 15s 1h/1m/1h\`]
$endif 
$endif 
$onlyPerms[managemessages;Bu komutu kullanmak için mesajları yönet yetkisine sahip olmalısın.]
$onlyBotPerms[managemessages;Bu komutu kullanmak için botun mesajları yönet yetkisine sahip olmalısı gerekiyor.]
  
  `}  
module.exports = [{
  name: "oylama",
  code:` 
$thumbnail[1;$serverIcon]
$addReactions[❌;✅]
$author[1;Oylama Başlatıldı]
$description[1;**$message**]
$color[1;RANDOM]
$footer[1;$username kullandı.]
$addTimestamp[1]
$onlyIf[$message!=;Oylama mesajı boş olamaz lütfen bir mesaj yaz!]
$onlyPerms[admin;$username yeterli yetkin yok!]
`}]
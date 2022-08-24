module.exports={
name:"sunucu",
aliases:["server"],
code:`
$author[1;$serverName[$guildID] Sunucu bilgileri;$serverIcon]
$thumbnail[1;$serverIcon]
$description[1;
<a:albatros:1006654273343463595> **Kanallar**:[$channelCount[$guildID]]
$channelCount[$guildID;Text] Yazı Kanalı

$channelCount[$guildID;Voice] Ses Kanalı

$channelCount[$guildID;Category] Kategori

<a:albatros:1006654273343463595> **Sunucu Sahibi**:

<a:tac:1006607827646828584> $userTag[$ownerID]

<a:albatros:1006654273343463595> **Sunucu Kuruluş Tarihi**:

📆\`$creationDate[$guildID]\`

<a:albatros:1006654273343463595> **Sunucu Güvenlik Seviyesi**:

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;NONE;Yok;1];LOW;Düşük;1];MEDIUM;Orta;1];HIGH;Yüksek;1];VERY_;Çok ;1]

<a:albatros:1006654273343463595> **Sunucu Bilgisi**:
👥 Toplam Üye: $membersCount

<a:nitro:1011659833092612136> Boost sayısı: $serverBoostCount

<a:banned:1009073769232474182> Toplam Yasaklı: $banCount

<a:albatros:1006654273343463595> **Üyeler**:
🟢$membersCount[$guildID;Online]🟡$membersCount[$guildID;Idle]🔴$membersCount[$guildID;Dnd]⚪$membersCount[$guildID;all;no]🤖$botCount
]
$footer[1;Sorgulayan: $userTag;$authorAvatar]
$color[1;ff0000]
`
}
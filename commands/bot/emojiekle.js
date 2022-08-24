module.exports = {
name:"emojiekle",
code:`
**<@$authorID> $message[1]  Emoji Eklendi**
$addEmoji[$guildID;$message[1];$message[2]]
$onlyPerms[manageemojis;<@$authorID> bu Komutu Kullanabilmek İçin \`Emojileri Yönet\` Yetkisine Sahip Olmalısın]
$onlyIf[$message[2]!=;<@$authorID> Lütfen Ekliyeceğin Emojinin Adını Gir]
$onlyIf[$message[1]!=;<@$authorID> Lütfen Bir URL Gir]
`
}

module.exports =[{
  name: "saas", 
  $if: "v4", 
  code:`
$if[$message[1]==]
Aç veya Kapat yazmalısın. 
$else 
$if[$message[1]==aç]
Saas sistemi aktif edildi. 
$setServerVar[saas;yes]
$onlyIf[$getServerVar[saas]!=yes;Bu sistem aktif zaten.]
$else
$if[$message[1]==kapat]
Saas sistemi kapatıldı. 
$setServerVar[saas;no]
$onlyIf[$getServerVar[saas]!=no;Bu sistem aktif değil zaten.]
$endif 
$endif 
$endif 
`
},{
name: "$alwaysExecute",
$if: "v4", 
code:`
$if[$toLowercase[$message[1]]==sa]
$reply[$messageID;yes]
⭐ Aleyküm selam hoşgeldin
$endif
$if[$toLowercase[$message[1]]==sea]
$reply[$messageID;yes]
⭐ Aleyküm selam hoşgeldin
$endif
$if[$toLowercase[$message[1]]==selam]
$reply[$messageID;yes]
⭐ Aleyküm selam hoşgeldin
$endif
$if[$toLowercase[$message[1]]==selamın aleyküm]
$reply[$messageID;yes]
⭐ Aleyküm selam hoşgeldin
$endif
$if[$toLowercase[$message[1]]==selamün aleyküm]
$reply[$messageID;yes]
⭐ Aleyküm selam hoşgeldin
$endif
$onlyIf[$getServerVar[saas]!=no;]


`}] 
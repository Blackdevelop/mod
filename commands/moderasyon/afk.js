module.exports =[{
  name: "afk", 
  code:`
$setGlobalUserVar[Afk;yes;$authorID] 
$setGlobalUserVar[AfkSebep;$noMentionMessage;$authorID]
<@$authorID> Başarıyla afk oldun.
$onlyIf[$noMentionMessage!=;Afk olma sebebi belirtmelisin.] 
$onlyIf[$getGlobalUserVar[Afk;$authorID]!=yes;]
`
},{
  name: "$alwaysExecute",  
  code:`

$setGlobalUserVar[Afk;no;$authorID] 
$setGlobalUserVar[AfkSebep;;$authorID]
<@$authorID> afk modundan çıktın. 
$onlyIf[$getglobaluservar[Afk;$authorID]!=no;]
$onlyIf[$message[1]!=afk;]
`
},{
  name: "$alwaysExecute",
  code:`

<@$authorID> etiket attığın kişi \`$getGlobalUserVar[AfkSebep;$mentioned[1;no]]\` sebebinden afk.
$onlyIf[$mentioned[1;no]!=;]
$onlyIf[$getglobaluservar[Afk;$mentioned[1;no]]!=no;]
`
}] 
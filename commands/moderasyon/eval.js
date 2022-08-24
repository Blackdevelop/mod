module.exports = [{
name:"-eval",
code:`
$eval[$message]
$onlyForIds[$botOwnerId;]
`
},{ 
name:"eval",
$if:"v5", 
type:"interaction",
prototype:"slash",
code:`
$if[$interactionData[options.data[0].value]==djs;{execute:djs}] 
$if[$interactionData[options.data[0].value]==aoijs;{execute:aoijs}]
`},{
name:"djs", 
type:"awaited",
prototype:"slash",
code:`
$interactionFollowUp[\`\`\`js
$djsEval[$slashOption[kod];yes]
\`\`\`]
$interactionDefer
$onlyForIDs[$botOwnerID;{"content":"Bunu sadece bot geliştiricisi kullanabilir.", "ephemeral":true, "options":{"interaction":true}}]
`}, {
name:"aoijs", 
type:"awaited",
prototype:"slash",
code:`
$interactionFollowUp[$eval[$slashOption[kod];yes;yes;yes;yes]]
$interactionDefer
$onlyForIDs[$botOwnerID;{"content":"Bunu sadece bot geliştiricisi kullanabilir.", "ephemeral":true, "options":{"interaction":true}}] 
`}]
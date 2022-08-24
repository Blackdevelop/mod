module.exports = [{
    name: "yardım", 
    code:`
  $author[1;$username[$clientId] Yardım Menüsü;$userAvatar[$clientID]]
  $color[1;FFFFFF]
  $description[1;Alta ki butonlara tıklayarak yardım menüme ulaşabilirsin.]
  $addButton[1;⚔️ Moderasyon;1;mod_$authorId;no] 
  $addButton[1;🎮Eğlence;2;eglence_$authorID;no]
  $addButton[1;Ana Menu;3;anamenu_$authorID;yes]
  
  `
  },{
    type: "interaction", 
    prototype: "button", 
    code:`
  $interactionUpdate[;{newEmbed:{author:$username[$clientID] Moderasyon Menüsü:$userAvatar[$clientID]}{description: 
  
  !afk
  
  !ban
  
  !forceban
  
  !herkese-rol-ver
  
  !kick
  
  !mute
  
  !rol-al
  
  !rol-ver
  
  !sil
  
  !yazdır
  
  !roller

  !sunucu-bilgi
  }
{color:FFFFFF};{actionRow:{button:⚔️ Moderasyon:1:mod_$authorID:yes}{button:🎮 Eğlence:2:eglence_$authorID:no}{button:Ana Menü:3:anamenu_$authorID:no}}]
  
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content":"Bu menüyü sen kurmamışsın, kullanamazsın.",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mod;]
  `
  },{
type: "interaction", 
    prototype: "button", 
    code:`
  $interactionUpdate[;{newEmbed:{author:$username[$clientID] Eğlence Menüsü:$userAvatar[$clientID]}{description:

?saat

?aşk-ölçer

?corona-test

?gay

?hackle

?kaç-cm

?karne

?lezbiyen

?sahte-mesaj

?sarıl

?şanslı-sayım

?şifre-oluştur

?türk-ölçer

?wasted

?yaş-hesapla

?yazı-tura

}{color:FFFFFF}};{actionRow:{button:⚔️ Moderasyon:1:mod_$authorID:no}{button:🎮 Eğlence:2:eglence_$authorID:yes}{button:Ana Menü:3:anamenu_$authorID:no}}] 
  $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content":"Bu menüyü sen kurmamışsın, kullanamazsın.",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==eglence;]
  `
},{
  type: "interaction", 
    prototype: "button", 
    code:`
  $interactionUpdate[;{newEmbed:{author:$username[$clientID] Ana Menü:$userAvatar[$clientID]}{description:Alta ki butonlara tıklayarak yardım menüme ulaşabilirsin.}{color:FFFFFF}};{actionRow:{button:⚔️ Moderasyon:1:mod_$authorID:no}{button:🎮 Eğlence:2:eglence_$authorID:no}{button:Ana Menü:3:anamenu_$authorID:yes}}] 
  $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content":"Bu menüyü sen kurmamışsın, kullanamazsın.",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==anamenu;]
  `
}]
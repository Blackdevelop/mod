module.exports=[{
  name: "küfür-engel", 
  $if: "v4", 
  code:`
$if[$message[1]==]
aç veya kapat yazmalısınız. 
$else
$if[$message[1]==aç]
Küfür engel sistemi başarıyla aktif edildi.
$setServerVar[kf;yes]
$onlyIf[$getServerVar[kf]!=yes;Bu sistem daha önce zaten açılmış.]
$else 
$if[$message[1]==kapat] 
Küfür engel sistemi başarıyla kapatıldı.
$setServerVar[kf;no]
$onlyIf[$getServerVar[kf]!=no;Bu sistem daha önce zaten açılmamış.]
$else 
$endif
$endif 
$endif 
$onlyPerms[admin;Bu komutu kullanmak için sunucuyu Yönet yetkisine ihtiyacın var.]
`
},{
  name:"$alwaysExecute", 
  $if: "v4", 
  code:`
$if[$checkContains[$toLowercase[$message];amk;am;aq;amq;amcık;amcik;göt;pipi;yarram;yarrak;yarak;yrrk;y@rrak;amını;amini;siktir;sikerim;skm;orusbu;oruspu;sktr;skrm;orospu;orspu;owoppu ç;oç;sex;porn;porno;sikiş;sikmek;amını]==true] 
Bu sunucuda küfür etmek yasak. 
$deletecommand
$deleteIn[5s]
$onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;] 
$onlyIf[$getServerVar[kf]!=no;]
$else 
$endif 

`
}]
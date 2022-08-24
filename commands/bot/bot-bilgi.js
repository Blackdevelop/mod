module.exports = {
  name: "bot-bilgi",
  code: `
$author[1;Bot Hakkında Bilgiler]
$description[1;

👑┊Yapımcı:
**$userTag[737939359470190622]**

🤖┊Botun Oluşturulma Tarihi:
**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[974308636178399312;time];and;Ve;1];seconds;Saniye;1];second;Saniye;1];minutes;Dakika;1];minute;Dakika;1];hours;Saat;1];hour;Saat;1];days;Gün;1];day;Gün;1];weeks;Hafta;1];week;Hafta;1];months;Ay;1];month;Ay;1];years;Yıl;1];year;Yıl;1]**

📄┊Toplam Sunucu:
**$serverCount**

👤┊Toplam Üye Sayısı:
**$allMembersCount**

📋┊Toplam Kanal Sayısı:
**$allChannelsCount**

🔧┊Komut Sayısı:
**$commandsCount**

🔧┊Aoi.js Sürümü:
**v$packageVersion**

🔧┊Node.js Sürümü:
**$nodeVersion**

🔧┊Ram:
**$roundTenth[$ram;1]**

🔧┊Cpu:
**$roundTenth[$cpu;1]**

⏱️┊Uptime:
**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;seconds;Saniye];second;Saniye];minutes;Dakika];minute;Dakika];hours;Saat];hour;Saat];days;Gün];day;Gün];weeks;Hafta];week;Hafta];months;Ay];month;Ay];years;Yıl];year;Yıl]**
]
$color[1;RANDOM]
$footer[1;$username kullandı.]
$addTimestamp[1]
`
}
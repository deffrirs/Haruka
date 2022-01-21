exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 00:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar Gausah Daftar Lagi Ege😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

📛 Nama : ${pushname}
#️⃣ Nomor : ${sender.split("@")[0]}
🕕 Waktu : ${time}
🤳 Serial : ${serialUser}
👥 Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.sewabot = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
「 *OPEN JASA SEWA BOT* 」
							
⬣ *HARGA SEWA BOT*

⬡ 1 MINGGU = Rp 10.000,00
⬡ 2 MINGGU = Rp 15.000,00
⬡ 3 MINGGU = Rp 20.000,00
⬡ 1 BULAN = Rp 30.000,00
⬡ PERMANEN = Rp 50.000,00

「*FITUR MENARIK*」
⬣ _Menu stiker_✔️
⬣ _sticker meme_✔️
⬣ _All menu download_✔️
⬣ _*Dan Banyak Lagi Fitur Nya*_

⬣ *PRICE JADIBOT*
Fitur Jadi Bot Juga Tersedia Dan BOT Dijamin Run Otomatis 24jam no delay Tergantung Klw Nomor Ga terbanned.

_Dibawah Berikut Harga Jadi BOT_

⬡ JADI BOT 1 Bulan 10K
⬡ Jadi BOT 2  Bulan 20k
⬡ Jadi BOT PERMANEN 25K

⬣ MINAT? PM
⬡ wa.me/6282132805286


NOTE : 
Bot On 24 Jam Karna Di Run Menggunakan Heroku
Reset Data Setiap Jam 02:00
}
exports.script = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
	╭─❒ SCRIPT
│◦➛Base : zeeone ofc
│◦➛Recode : Deffri Gans
│
└──────[ GITHUB ]──────❒
  │◦➛Script Ory :
  │◦➛zeeone ofc
  │◦➛Script Recode : 
  │◦➛Ntar Di Rillis
  └──────────────────❒`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│ ➤ ${prefix}menu
│ ➤ ${prefix}help
│
├ *Download*
│ ➤ ${prefix}play [query]
│ ➤ ${prefix}song [judul lagu]
│ ➤ ${prefix}pinterest [query]
│ ➤ ${prefix}playstore [query]
│ ➤ ${prefix}ytmp3 [url]
│ ➤ ${prefix}ytmp4 [url]
│ ➤ ${prefix}tiktok [url]
│ ➤ ${prefix}tiktoknowm [url]
│ ➤ ${prefix}tiktokwm [url]
│ ➤ ${prefix}tiktokaudio [url]
│ ➤ ${prefix}soundcloud [url]
│ ➤ ${prefix}telesticker [url]
│
├ *Convert*
│ ➤ ${prefix}stiker [video/image]
│ ➤ ${prefix}semoji 😎
│ ➤ ${prefix}smeme [text]
│ ➤ ${prefix}memegen [text|text2]
│ ➤ ${prefix}fast [video/vn]
│ ➤ ${prefix}tupai [video/vn]
│ ➤ ${prefix}vibra [video/vn]
│ ➤ ${prefix}robot [video/vn]
│ ➤ ${prefix}slow [video/vn]
│ ➤ ${prefix}bass [video/vn]
│ ➤ ${prefix}nightcore [video/vn]
│
├ *Education*
│ ➤ ${prefix}nuliskiri [text]
│ ➤ ${prefix}nuliskanan [text]
│ ➤ ${prefix}foliokiri [text]
│ ➤ ${prefix}foliokanan [text]
│
├ *Game*
│ ➤ ${prefix}tebakgambar 
│
├ *Info*
│ ➤ ${prefix}owner
│ ➤ ${prefix}daftar
│ ➤ ${prefix}sc
│ ➤ ${prefix}sewabot
│
├ *Owner*
│ ➤ ${prefix}broadcast [text]
│ ➤ ${prefix}leave
│ ➤ >
│ ➤ $
│ ➤  => 
│
├ *Group*
│ ➤ ${prefix}antilink 1 / 0
│ ➤ ${prefix}hidetag [text]
│ ➤ ${prefix}linkgrup
│ ➤ ${prefix}tagall
│ ➤ ${prefix}add @tag
│ ➤ ${prefix}kick @tag
│ ➤ ${prefix}setdesc [text] 
│ ➤ ${prefix}setname [text] 
╰─⬣
`
	}
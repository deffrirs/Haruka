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
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│ ➤ ${prefix}menu
│ ➤ ${prefix}help
│ ➤ ${prefix}haruka
│
├ *Download*
│ ➤ ${prefix}play [query]
│ ➤ ${prefix}song [judul lagu]
│ ➤ ${prefix}pinterest [query]
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
│ ➤ ${prefix}kick @tag
│ ➤ ${prefix}setdesc [text] 
│ ➤ ${prefix}setname [text] 
╰─⬣
`
	}
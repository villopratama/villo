exports.donate = (id, villo, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Donasi Ke ${villo}*
╠════════════════════
║├≽️⚜ *PULSA* : _0838-4325-1769_
║├≽️⚜ *DANA* : _083843251769_
╠════════════════════
║  *${villo}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}https://chat.whatsapp.com/DU7apY5jham50lpxqYRcYt_
║│2. *YouTube <subscribe>*
║│ _${youtube}https://youtube.com/channel/UCA1vAqFt3x3G8uNc6zYgRlA_
║│3. *Instagram <Follow>*
║│ _${instagram}www.instagram.com/villosmile_
║│4. *Creator ${villo}*
║│ _${nomer}083843251769_
║╰───────────
╠════════════════════
║ _*MADE BY VILLO PRATAMA*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}


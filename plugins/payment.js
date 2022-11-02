import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  conn.sendButton(m.chat, `
╭───━━─╼❑〔 *Donasi* 〕❑╾─━━──
│ ☂︎ Pulsa 1 [083148986041]
│ ☂︎ Dana  [083148986041]
│ ☂︎ Pulsa 2  [083898862177]
╰──━━━─❍
╭───━━─╼❑〔 *NOTE* 〕❑╾─━━──
│ _Hasil donasi akan digunakan buat beli panel_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰──━━━─❍
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `Follow Tiktok My Bestie`, sourceUrl: 'https://www.tiktok.com/@alfiitzy1', thumbnail: await (await fetch('https://i.ibb.co/M5zdTWt/20221025-115823.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler

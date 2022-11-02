let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*✧───────···────────✧*\n*Hallo Juga Kak, 𝙰𝚕𝚏𝚒𝚒𝚃𝚣𝚢 𝙼-𝙳 Kangen Nih* \n *Gimana Kabar Nya? (⁠≧⁠▽⁠≦⁠)*', 'status@broadcast')
}
handler.customPrefix = /^(Hallo 𝙰𝚕𝚏𝚒𝚒𝚃𝚣𝚢|Hlo 𝙰𝚕𝚏𝚒𝚒𝚃𝚣𝚢|hi 𝙰𝚕𝚏𝚒𝚒𝚃𝚣𝚢|Hai 𝙰𝚕𝚏𝚒𝚒𝚃𝚣𝚢)$/i
handler.command = new RegExp

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 

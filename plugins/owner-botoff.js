let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Sukses mematikan Bot 📴* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['𝙰𝚕𝚏𝚒𝚒𝚃𝚣𝚢 𝙼𝚞𝚕𝚝𝚒-𝙳𝚎𝚟𝚒𝚌𝚎(on/off)']
handler.tags = ['owner']
handler.command = /^(botoff)$/i

handler.admin = true
handler.group = true

export default handler

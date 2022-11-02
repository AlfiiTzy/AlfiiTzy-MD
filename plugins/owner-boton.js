let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Sukses Menghidupkan 𝙰𝚕𝚏𝚒𝚒𝚃𝚣𝚢 𝙼𝚞𝚕𝚝𝚒-𝙳𝚎𝚟𝚒𝚌𝚎 🤖* ')
}


handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true

export default handler

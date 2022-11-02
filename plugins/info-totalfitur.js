import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
    const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `Total Fitur Bot Saat ini: ${totalf}\n`,wm + '\n\n' + botdate, giflogo, [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://youtube.com/channel/UCOt2KJ3zAodg8NJv9NGoNxw',
                        mediaType: 2,
                        description: `⚘ ᴄʀᴇᴀᴛᴇ ᴀʟꜰɪɪᴛᴢʏ ᴅᴇᴠ`,
                        title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `⚘ ᴄʀᴇᴀᴛᴇ by ᴀʟꜰɪɪᴛᴢʏ ᴅᴇᴠ`,          previewType: 0,
                        thumbnail: await (await fetch(giflogo2)).buffer(),
                        mediaUrl: 'https://youtube.com/channel/UCOt2KJ3zAodg8NJv9NGoNxw'
                        
                      }}
})
  }


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler

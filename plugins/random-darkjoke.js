import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
    let url = global.API('xteam', '/randomimage/meme', {}, 'APIKEY')
    await conn.sendButton(m.chat, 'Nih banh', wm, url, [['Next', `${usedPrefix+command}`]], m, 0, { thumbnail: Buffer.alloc(url) })
}
handler.help = ['darkjoke']
handler.tags = ['random']
handler.command = /^(darkjoke|darkjokes)$/i

export default handler

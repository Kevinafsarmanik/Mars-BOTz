import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = global.API('lolhuman', '/api/random/cecan', {}, 'apikey')
 await conn.sendButton(m.chat, 'Nih banh', wm, res, [
 ['Next', `${usedPrefix+command}`]
], m, 0, { thumbnail: await(await fetch(res)).buffer() })
}
handler.help = ['cecan']
handler.tags = ['random']
handler.command = /^(cecan)$/i

export default handler

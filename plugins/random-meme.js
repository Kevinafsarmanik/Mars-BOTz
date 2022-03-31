import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = global.API('lolhuman', '/api/meme/memeindo', {}, 'apikey')
  await conn.sendButton(m.chat, 'Nih banh', wm, res, [
  ['Next', `${usedPrefix+command}`]
], m, 0, { thumbnail: await(await fetch(res)).buffer() })
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i

export default handler

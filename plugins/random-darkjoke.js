import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let url = global.API('lolhuman', '/api/meme/darkjoke', {}, 'APIKEY')
  await conn.sendButton(m.chat, 'Nih banh', wm, url, [
  ['Next', `${usedPrefix+command}`]
], m, 0, { thumbnail: await(await fetch(url)).buffer() })
}
handler.help = ['darkjoke']
handler.tags = ['random']
handler.command = /^(darkjoke|darkjokes)$/i

export default handler

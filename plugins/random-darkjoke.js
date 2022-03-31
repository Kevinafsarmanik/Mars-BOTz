import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let res = global.API('lolhuman', '/api/meme/darkjoke', {}, 'apikey')
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.image) throw 'Err'
  let thumbnail = await (await fetch(json.image)).buffer()
  conn.sendFile(m.chat, json.img, null, null, m, 0, { thumbnail })
}

handler.help = ['darkjoke']
handler.tags = ['internet']

handler.command = /^(darkjoke)$/i

export default handler

import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  if (!res.ok) throw eror
  m.reply(`
Lirik: *${json.title}*
Author: _${json.author}_

${json.lyrics}


${json.links.genius}
`, m)
}
handler.help = ['lirik'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler

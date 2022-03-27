import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*Title:* ${title}
*Published:* ${publishedTime}
*Duration:* ${durationH}
*Views:* ${viewH}
  `.trim(), wm, thumbnail, url, 'Go To Youtube', null, null, [
    ['Audio', `${usedPrefix}yta ${url} yes`],
    ['Video', `${usedPrefix}ytv ${url} yes`]
  ], m)
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^(play|p)$/i

handler.exp = 0
handler.limit = false

export default handler


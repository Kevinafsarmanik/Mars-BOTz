let limit = 80
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let audio, source, res, link, lastError, isLimit
  for (let i in _audio) {
    try {
      audio = _audio[i]
      isLimit = limitedSize < audio.fileSize
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
//  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download audio')
//  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
//*📌Title:* ${title}
//*🗎 Filesize:* ${audio.fileSizeH}
//*${isLimit ? 'Pakai ' : ''}Link:* ${link}
//`.trim(), m)
  if (!isLimit) await conn.sendMessage(m.chat, { document: { url: link}, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
//*📌Title:* ${title}
//*🗎 Filesize:* ${audio.fileSizeH}
//`.trim(), m, null, {
//    asDocument: chat.useDocument
//  })
}
handler.command = /^yt(a|mp3)$/i

handler.exp = 0

export default handler


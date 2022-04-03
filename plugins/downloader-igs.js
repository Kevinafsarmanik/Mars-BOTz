import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. username nya mana?\n\ncontoh:\n\n${usedPrefix + command} instagram`
  if (args[0].startsWith('http') || args[0].startsWith('@')) throw `username salah\n\ncontoh: *${usedPrefix}${command} instagram*`
  
  let res = await fetch(API('hardianto', '/api/download/igstory', {
    username: args[0]
  }, 'apikey'))
  var anu = await res.json()
  var anuku = anu.medias
  for (let { url, fileType } of anuku) 
  await conn.sendFile(m.chat, url, 'ig' + (fileType == 'video' ? '.mp4' : '.jpg'), 'Nih banh', m)
  await delay(1500)
}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i

handler.limit = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))

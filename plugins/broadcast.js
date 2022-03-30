import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  await delay(1500)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '「 *Mars BOTz Broadcast* 」\n\n' + teks + '\n\nMars BOTz'), true).catch(_ => _)
  m.reply('Selesai Broadcast All Chat :)')
}
handler.help = ['broadcast'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i

handler.owner = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))

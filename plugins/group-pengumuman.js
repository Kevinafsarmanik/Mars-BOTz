import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      dfail('admin', m, conn)
      throw false
    }
  }
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  const msg = conn.cMod(m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
        text: c || ''
      }
    }, {
      userJid: conn.user.id
    }),
    text || q.text, conn.user.jid, { mentions: users }
  )
  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag)$/i

handler.group = true

export default handler

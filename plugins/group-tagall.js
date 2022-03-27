let handler = async(m, { conn, isOwner, isAdmin, usedPrefix: _p, text, participants }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
    let user = global.db.data.users[m.sender]
    let teks = `${text ? text : '*–––––– 「 Tag All Member 」 ––––––*'}\n${readMore}`
		      	for (let mem of participants) {
		            teks += `\n@${mem.id.split('@')[0]}`
				}
            await conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <message>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

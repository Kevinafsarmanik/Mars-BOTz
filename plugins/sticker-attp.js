let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : 'teksnya mana?'
let res = global.API('lolhuman', '/api/attp', { file: '', text: teks })
 conn.sendFile(m.chat, res, 'attp.webp', m, 0, { packname: global.packname, author: global.author })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i

export default handler

let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : 'teksnya mana?'
    let sel = API('lolhuman', '/api/attp', { file: '', text: teks })
    conn.sendFile(m.chat, sel, 'attp.webp', m, 0, {packname: packname, author: author})
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i

export default handler

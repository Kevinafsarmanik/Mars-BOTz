import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} akad`

    let res = await fetch(API('chipa', '/api/download/jooxdl', { search: text }, 'apikey')
    let pesan = `
Judul: ${json.result.judul}
Artis: ${json.result.artist}
Album: ${json.result.album}
Ukuran File: ${json.result.filesize}
Durasi: ${json.result.duration}
`.trim()
    conn.sendFile(m.chat, json.result.thumb, 'eror.jpg', pesan, m, 0, { thumbnail: await (await fetch(thumb)).buffer() })
    conn.sendFile(m.chat, json.result.mp3_url, 'error.mp3', '', m, 0, { asDocument: db.data.chats[m.chat].useDocument, mimetype: 'audio/mpeg' })
}
handler.help = ['joox'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = /^joox$/i

export default handler

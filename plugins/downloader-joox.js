import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} akad`

    let res = await fetch(API('chipa', '/api/download/jooxdl', { title: text }, 'apikey'))
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let pesan = `
Judul: ${json.result.judul}
Artis: ${json.result.artist}
Album: ${json.result.album}
Ukuran File: ${json.result.filesize}
Durasi: ${json.result.duration}
`.trim()
    conn.sendFile(m.chat, json.result.thumb, 'eror.jpg', pesan, m)
    conn.sendMessage(m.chat, { document: { url: json.result.mp3_url}, mimetype: 'audio/mpeg', fileName: `${json.result.judul}`}.mp3, {quoted: m})
}
handler.help = ['joox'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = /^joox$/i

handler.limit = true

export default handler

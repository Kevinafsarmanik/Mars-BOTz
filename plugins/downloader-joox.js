import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} akad`

    let res = await fetch(API('lolhuman', '/api/jooxplay', { query: text }, 'apikey'))
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let pesan = `
❖ Title: *${json.result.song}*
❖ Artists: *${json.result.singer}*
❖ Album: *${json.result.album}*
❖ Duration: *${json.result.duration}*
❖ Uploaded: *${json.result.date}*
`.trim()
    conn.sendFile(m.chat, json.result.image, 'eror.jpg', pesan, m)
    conn.sendMessage(m.chat, { document: { url: json.result.link}, mimetype: 'audio/mpeg', fileName: `${json.result.song}.mp3`}, {quoted: m})
}
handler.help = ['joox'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = /^joox$/i

handler.limit = true

export default handler

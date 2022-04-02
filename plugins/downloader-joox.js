import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} akad`

    let res = await fetch(API('lolhuman', '/api/jooxplay', { query: text }, 'apikey'))
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let { song, singer, album, date, duration } = json.result
    let pesan = `
❖ Title: *${info.song}*
❖ Artists: *${info.singer}*
❖ Album: *${info.album}*
❖ Duration: *${info.duration}*
❖ Uploaded: *${info.date}*
`.trim()
    conn.sendFile(m.chat, json.result.image, 'eror.jpg', pesan, m)
    conn.sendMessage(m.chat, { document: { url: json.result.audio.link}, mimetype: 'audio/mpeg', fileName: `${json.result.info.song}.mp3`}, {quoted: m})
}
handler.help = ['joox'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = /^joox$/i

handler.limit = true

export default handler

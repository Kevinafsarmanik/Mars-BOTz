import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} akad`

    let res = await fetch(API('xteam', '/dl/jooxdl', { lagu: text }, 'APIKEY'))
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let { album, album_url, download_url, singers, songname, filesize, duration } = json.result
    let pesan = `
❖ Title: *${songname}*
❖ Artists: *${singers}*
❖ Album: *${album}*
❖ Duration: *${duration}*
❖ Size: *${filesize}*
`.trim()
    conn.sendFile(m.chat, album_url, 'eror.jpg', pesan, m)
    conn.sendMessage(m.chat, { document: { url: downloadurl_url}, mimetype: 'audio/mpeg', fileName: `${songname}.mp3`}, {quoted: m})
}
handler.help = ['joox'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = /^joox$/i

handler.limit = true

export default handler

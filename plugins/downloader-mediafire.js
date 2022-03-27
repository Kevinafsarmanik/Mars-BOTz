import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. urlnya mana?\n\npenggunaan:\n${usedPrefix + command} url\ncontoh:\n${usedPrefix + command} http://www.mediafire.com/file/js0gr2nozcmk9yg/example.txt/file`
    let res = await fetch(API('amel', '/mediafire', { url: text }, 'apikey'))
    let json = await res.json()
    if (!json.status) throw json
    await conn.sendFile(m.chat, json.link, json.nama, wm, m)
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = 1

export default handler

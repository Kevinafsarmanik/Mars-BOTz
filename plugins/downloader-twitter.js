import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. urlnya mana?\n\npenggunaan:\n${usedPrefix + command} url\ncontoh:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    let res = await fetch(API('hardianto', '/api/download/twitter', { url: text }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    let { SD, desc } = json
    await conn.sendFile(m.chat, SD, null, desc, m)
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(twt|twitter)$/i

handler.limit = true

export default handler

import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/random/quotes', {}, 'apikey'))
    let json = res.data
    let hasil = `_${json.result.by}_\n\n${json.result.quote}
`.trim()
    conn.sendButton(m.chat, hasil, wm, [
    ['Next', `${usedPrefix+command}`]
], m)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i

export default handler

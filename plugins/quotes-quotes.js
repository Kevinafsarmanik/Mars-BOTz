import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/random/quotes', {}, 'apikey'))
    let json = res.data
    let hasil = `
_${json.result.by}_

${json.result.quote}
`.trim()
    conn.sendHydrated(m.chat, instagram, 'Instagram', null, null, hasil, wm, fla + 'quotes', [
    ['Next', `${usedPrefix+command}`]
], m)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i

export default handler

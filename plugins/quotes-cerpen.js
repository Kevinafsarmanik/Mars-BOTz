import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/cerpen', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let hasil = `
${json.result.title}
${json.result.creator}
`.trim()
    conn.sendButton(m.chat, hasil, json.result.cerpen, [
    ['Next', `${usedPrefix + command}`]
], m)
}
handler.help = ['cerpen']
handler.tags = ['quotes']
handler.command = /^(cerpen)$/i

export default handler

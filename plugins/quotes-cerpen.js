import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/cerpen', {}, 'apikey'))

    let json = res.data
    conn.sendButton(m.chat, json.result.title\n + json.result.creator, json.result.cerpen, [
    ['Next', `${usedPrefix + command}`]
], m)
}
handler.help = ['cerpen']
handler.tags = ['quotes']
handler.command = /^(cerpen)$/i

export default handler

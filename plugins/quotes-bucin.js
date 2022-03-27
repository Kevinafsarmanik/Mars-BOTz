import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/random/bucin', {}, 'apikey'))

    let json = res.data
    conn.sendButton(m.chat, json.result, wm, [
    ['Next', `${usedPrefix+command}`]
], m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i

export default handler

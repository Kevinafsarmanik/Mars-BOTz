import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/random/faktaunik', {}, 'apikey'))

    let json = res.data
    conn.sendButton(m.chat, json.result, wm, [
    ['Next', `${usedPrefix+command}`]
], m)
}
handler.help = ['fakta']
handler.tags = ['quotes']
handler.command = /^(fakta)$/i

export default handler

import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
    let res = (`https://api.lolhuman.xyz/api/random/cecan?apikey=rey2k22`)
    await conn.sendButton(m.chat, 'Cewek Cantik', wm, res, [
    ['Next', `${usedPrefix+command}`]
], m)
}
handler.help = ['cecan']
handler.tags = ['info']
handler.command = /^(cecan)$/i

export default handler
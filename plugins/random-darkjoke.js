import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
    let res = (`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=rey2k22`)
    await conn.sendButton(m.chat, 'Nih banh', wm, res, [
    ['Next', `${usedPrefix+command}`]
], m)
}
handler.help = ['darkjoke']
handler.tags = ['random']
handler.command = /^(darkjoke|darkjokes)$/i

export default handler

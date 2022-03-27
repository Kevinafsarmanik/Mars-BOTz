import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
    let res = (`https://api.lolhuman.xyz/api/meme/memeindo?apikey=rey2k22`)
    await conn.sendButton(m.chat, 'Nih banh', wm, res, [
    ['Next', `${usedPrefix+command}`]
], m)
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i

export default handler

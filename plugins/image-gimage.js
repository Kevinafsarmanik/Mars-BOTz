import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    conn.sendButton(m.chat, `
*── 「 GOOGLE IMAGE 」 ──*
`.trim(), wm, res.getRandom(), ['Next', `.image ${text}`], m)
}
handler.help = ['gimage <query>']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i

export default handler

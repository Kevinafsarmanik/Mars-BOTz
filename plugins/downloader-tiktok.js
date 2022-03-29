import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedprefix, command }) => {
    if (!args[0]) throw `use example ${usedprefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark 
    if (!url) throw 'can\'t download video!'
    conn.sendButton(m.chat, `
*Nickname:* ${nickname}
*Description:* ${description}
`.trim(), wm, url, ['Audio', `.ttmusik ${args[0]}`], m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktok|tt|tiktoknowm)$/i

export default handler 

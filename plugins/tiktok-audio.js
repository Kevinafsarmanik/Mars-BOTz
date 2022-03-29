import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, args, usedprefix, command }) => {
    if (!args[0]) throw `use example ${usedprefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark 
    if (!url) throw 'can\'t download video!'
let audio = await toAudio(url, 'mp4')
    conn.sendFile(m.chat, audio.data, 'tiktok.mp3', `
*Nickname:* ${nickname}
*Description:* ${description}
`.trim(), m, null,  {mimetype:'audio/mp4'})
}
handler.help = ['ttaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktokmusik|ttmusik)$/i

export default handler

import hxz from 'hxz-api'

let handler = async(m,{text, conn, usedPrefix, command}) => {
if (!text) throw `Use example ${usedPrefix}${command}\nhttps://vt.tiktok.com/ZGJBtcsDq/`
let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.sendFile(m.chat, nowm, null, null, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|tiktoknowm)$/i

export default handler

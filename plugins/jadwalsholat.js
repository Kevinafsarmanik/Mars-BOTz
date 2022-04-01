import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    let res = await axios.get(API('chipa', '/api/jadwal_sholat', { kota: text }, 'apikey'))
    if (!text) throw 'Masukkan nama daerah\n\nContoh: .jadwalsholat surabaya'
    let json = res.data
    m.reply(`
┌ 「 ${json.result.kota} 」
├ • Tanggal: ${json.result.tanggal}
├ • Subuh: ${json.result.subuh}
├ • Dzuhur: ${json.result.dzuhur}
├ • Azhar: ${json.result.ashar}
├ • Maghrib: ${json.result.maghrib}
├ • Isya: ${json.result.isya}
└───`.trim())
}
handler.help = ['salat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

export default handler

import axios from 'axios'

let handler = async (m, { conn, text }) => {
    let res = await axios.get(API('lolhuman', '/api/niatsholat', { text }, 'apikey'))
    if (!text) throw 'Masukkan nama sholat\n\nContoh: .niat subuh'
    let json = res.data
    m.reply(`
${json.result.name}

${json.result.ar}
Latin: ${json.result.latin}

Artinya: ${json.result.id}
`.trim())
}
handler.help = ['niatsholat <apa>']
handler.tags = ['quran']
handler.command = /^(niat|niatsholat)$/i

export default handler

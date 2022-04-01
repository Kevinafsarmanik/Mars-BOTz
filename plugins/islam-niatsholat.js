import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/niatsholat', { text }, 'apikey'))
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

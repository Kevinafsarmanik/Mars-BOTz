import { tebakgambar } from '@bochilteam/scraper'

let timeout = 120000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', wm, null, buttons, conn.tebakgambar[id][0])
        throw false
    }
    let json = await tebakgambar()
    // if (!json.status) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk hint
Bonus: ${poin} XP
    `.trim()
    conn.tebakgambar[id] = [
        await conn.sendButton(m.chat, caption, wm, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgambar[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, null, [
                ['Tebak Gambar', '/tebakgambar']
            ], conn.tebakgambar[id][0])
            delete conn.tebakgambar[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

export default handler

const buttons = [
    ['Bantuan', '/hint'],
    ['Nyerah', 'menyerah']
]
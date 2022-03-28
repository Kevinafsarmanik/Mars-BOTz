let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    m.reply(`Berhasil join grup ${res}`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
        else global.db.data.chats[res].expired = now + jumlahHari
    })
    await conn.sendButton(res.gid, `
*Mars BOTz* adalah bot whatsapp yang dibangun dengan Nodejs, *Mars BOTz* diundang oleh *RHns*
    
ketik *${usedPrefix}menu* untuk melihat daftar perintah`.trim(), wm, ['Menu', `${usedPrefix}menu`], m)
}
handler.help = ['join <chat.whatsapp.com>']
handler.command = /^join$/i

handler.owner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))

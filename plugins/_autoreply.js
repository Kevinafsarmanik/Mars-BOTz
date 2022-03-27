let handler = m => m

handler.all = async function (m) {
    if (m.chat.endsWith('broadcast')) return
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let { group } = db.data.settings[this.user.jid]

    if (/(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i.test(m.text) && !m.fromMe) {
        m.reply(`Wa\'alaikumussalam Wr.Wb.`)
    }

    return !0
}

export default handler

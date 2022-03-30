let handler = async (m, { conn, text, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)')
  } else throw `Penggunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} selamat datang @user digrup @subject\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['group']
handler.command = /^setwelcome$/i

export default handler

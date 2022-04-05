let handler = async (m, { conn, command }) => conn.sendHydrated(m.chat, `
┌ 「 Donasi • Pulsa 」
│ • XL: [087833996829]
│ • Axis: [083805870343]
└──

┌ 「 Donasi • Non Pulsa 」
│ • Dana: [081297084552]
└──`.trim(), wm, fla + 'donasi', instagram, 'Instagram', null, null, [['Back To Menu', '.menu']], m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

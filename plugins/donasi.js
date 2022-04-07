let handler = async (m, { conn, command }) => conn.sendHydrated(m.chat, `
┌ 「 Donasi • Pulsa 」
│ • XL: [TANYA KEPIN]
│ • Axis: [TANYA KEPIN]
└──

┌ 「 Donasi • TANYA KEPIN 」
│ • Dana: [TANYA KEPIN]
└──`.trim(), wm, fla + 'donasi', instagram, 'Instagram', null, null, [['Back To Menu', '.menu']], m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

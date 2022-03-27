let handler = async (m, { conn, command }) => conn.sendHydrated(m.chat, `
┌ 「 Donasi • Pulsa 」
│ • Indosat Ooredoo: [085856508824]
│ • Axis: [083832492541]
└──

┌ 「 Donasi • Non Pulsa 」
│ • Link: https://saweria.co/botrhnsh
│ • Dana: [083832492541]
└──`.trim(), wm, fla + 'donasi', instagram, 'Instagram', null, null, [['Back To Menu', '.menu']], m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

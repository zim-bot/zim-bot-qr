// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2023 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER ZIMBOT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮support@zimbot.me
//▮WHATSAPP US : +263 776 558 634
//▮YOUTUBE CHANNELL: https://youtube.com/@zim-bot
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃I WROTE THIS SCRIPT BY MYSELF THIS SCRIPT IS FOR EVERYONE DONT SELL IT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//


const pino = require("pino");
let qrcode = require("qrcode-terminal");
const path = require('path');
const fs = require("fs-extra");
const Drips = require('drips-memes')
const { color,bgcolor} = require('./tuna/color')
const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore, } = require("@adiwajshing/baileys");
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
async function BlessedTuna() {
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/drips')
Drips.hr();
console.log(color(''), color('THANKS FOR CHOOSING ZIM BOT', 'green'))
console.log(color(''), color('SCRIPT BY DRIPS', 'red'))
console.log(color( ''), color('https://wa.me/+447441437150','cyan'))
Drips.hr();
Drips.banner(`DRIPS ZIM BOT OWNER`)
Drips.ok('WELCOME TO ZIMBOT')
Drips.done('I WROTE THIS SCRIPT BY MYSELF')
Drips.info('YOU WANNA CONTRUBUTE FEEL FREE TO CONTACT ME, BEING FRIENDLY IS MY LANGUAGE')
Drips.error('')
Drips.time('')
Drips.hr();
try {
let ZimBotInc = makeWASocket({
printQRInTerminal: true,
logger: pino({ level: "silent" }),
browser: ["ZIM-BOT", "Safari", "3.0"],
auth: state
});
ZimBotInc.ev.on("connection.update", async (s) => {
const { connection, lastDisconnect, qr } = s;
if (connection == "open") {
await delay(500);
const session = fs.readFileSync('./drips/creds.json')           
console.log(bgcolor(''), ('Oooh Dad it\'s me Drips'))
console.log(color(''), ('\nDon\'t share your creds.json to anyone otherwise that user can access your account.\nokay'))
let cc = `*Thanks for choosing ZIMBOT you are the best user of all time*\n\n_You completed first step of making ZIMBOT_.\nnCheck video my YouTube Channel don't forget to subscribe https://youtube.com/@zim-bot\n*Website:* https://dripsofc.tech\nContact Support: support@zimbot.me\nThanks`
await ZimBotInc.sendMessage(ZimBotInc.user.id, { document: session, mimetype: 'application/json', fileName: `creds.json`});
await ZimBotInc.sendMessage(ZimBotInc.user.id, { text: cc });
await require('child_process').exec('rm -rf drips')
process.exit(1)
          
}
ZimBotInc.ev.on('creds.update', saveCreds)
if (
connection === "close" &&
lastDisconnect &&
lastDisconnect.error &&
lastDisconnect.error.output.statusCode != 401
) {
BlessedTuna();
}
});
} catch (err) {
// console.log(err);
await require('child_process').exec('rm -rf drips')
process.exit(1)
}
}

BlessedTuna();

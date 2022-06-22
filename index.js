const {Client, Intents} = require('discord.js')
const cl = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

cl.on('message', msg => {
    if(msg.content === '!ping') {
        msg.reply('pong')
    }
})

cl.login('OTg5MDgwNjQ3NjQzNTc4Mzg5.GvWJNV.lXsFyC9Di9Vq7qiikugFpjI4nv3Sc5A2Tz-rks')

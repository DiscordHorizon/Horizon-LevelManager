const Discord = require("discord.js");
const { discord } = require("./utils/horizonUtils");

const bot = new Discord.Client();

bot.on('ready', async () => {
    await bot.user.setPresence({
        activity: {
            name: `Use os canais de voz para subir de level!!`,
            type: 1,
            url: "https://twitch.tv/bravanzin",
        },
    });
    console.log("[Bot] Connected");
})

bot.login(discord);

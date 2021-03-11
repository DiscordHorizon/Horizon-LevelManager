const Discord = require("discord.js");
const { discord } = require("./utils/horizonUtils");
const { userConnection } = require("./controller/user");

require("./server");
require("./database");

const bot = new Discord.Client();

bot.on("ready", async () => {
    await bot.user.setPresence({
        activity: {
            name: `Use os canais de voz para subir de level!!`,
            type: 1,
            url: "https://twitch.tv/bravanzin",
        },
    });
    console.log("[Bot] Connected");
});

bot.on("voiceStateUpdate", (oldState, newState) => {
    if (oldState.channelID === newState.channelID) return;
    if (newState.member.user.bot) return;

    const roles = newState.guild.roles.cache;
    const user = newState.guild.members.cache.get(newState.id);
    userConnection(newState.channelID, user, roles);
});

bot.login(discord);

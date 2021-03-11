let config;
try {
    config = require("../config.json");
} catch (error) {
    config = null;
}

exports.discord = config ? config.discord : process.env.DISCORD;
exports.mongoUri = config ? config.mongoUri : process.env.MONGO_URI;
exports.guild = config ? config.guild : process.env.GUILD;
exports.rolesConfig = {
    ids: {
        heaven: config ? config.roles.heaven : process.env.HEAVEN,
        clouds: config ? config.roles.clouds : process.env.CLOUDS,
        snow: config ? config.roles.snow : process.env.SNOW,
        icePeaks: config ? config.roles.icePeaks : process.env.ICE_PEAKS,
        fishs: config ? config.roles.fishs : process.env.FISHS,
        seas: config ? config.roles.seas : process.env.SEAS,
        lights: config ? config.roles.lights : process.env.LIGHTS,
        rainbows: config ? config.roles.rainbows : process.env.RAINBOWS,
        vulcans: config ? config.roles.vulcans : process.env.VULCANS,
        shinyStones: config
            ? config.roles.shinyStones
            : process.env.SHINY_STONES,
        stones: config ? config.roles.stones : process.env.STONES,
        rivers: config ? config.roles.rivers : process.env.RIVERS,
        flowers: config ? config.roles.flowers : process.env.FLOWERS,
        trees: config ? config.roles.trees : process.env.TREES,
        arriving: config ? config.roles.arriving : process.env.ARRIVING,
    },
    array: [
        config ? config.roles.heaven : process.env.HEAVEN,
        config ? config.roles.clouds : process.env.CLOUDS,
        config ? config.roles.snow : process.env.SNOW,
        config ? config.roles.icePeaks : process.env.ICE_PEAKS,
        config ? config.roles.fishs : process.env.FISHS,
        config ? config.roles.seas : process.env.SEAS,
        config ? config.roles.lights : process.env.LIGHTS,
        config ? config.roles.rainbows : process.env.RAINBOWS,
        config ? config.roles.vulcans : process.env.VULCANS,
        config ? config.roles.shinyStones : process.env.SHINY_STONES,
        config ? config.roles.stones : process.env.STONES,
        config ? config.roles.rivers : process.env.RIVERS,
        config ? config.roles.flowers : process.env.FLOWERS,
        config ? config.roles.trees : process.env.TREES,
        config ? config.roles.arriving : process.env.ARRIVING,
    ],
};

let config;
try {
    config = require('../config.json');
} catch (error) {
    config = null;
}

exports.discord = config ? config.discord : process.env.DISCORD;
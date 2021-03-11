const userModel = require("../models/user");
const levelsModel = require("../models/levels");
const { setLevel } = require("../include/level");

async function userVerify(userId) {
    const req = await userModel.findOne({ id: userId });

    if (!req) {
        const newUser = new userModel({
            id: userId,
            level: 1,
            lastConnection: Date.now(),
            accumulatedTime: 0,
            tasks: Array,
        });
        await newUser.save();
    }

    return (user = await userModel.findOne({ id: userId }));
}

async function updateLevel(id, roles) {
    const exp = await levelsModel.findOne({ name: "Exp Table" });
    const user = await userModel.findOne({ id: id });
    var userLevel = 1;
    exp.expTable.forEach((lvl) => {
        if (user.accumulatedTime >= lvl.exp) {
            userLevel = lvl.level;
        }
    });
    await user.updateOne({ level: userLevel });
    setLevel(id, roles);
}

module.exports = {
    async userConnection(state, roles) {
        const user = await userVerify(state.id);

        if (state.channelID) {
            await user.updateOne({ lastConnection: Date.now() });
        } else {
            time = Date.now() - user.lastConnection;
            await user.updateOne({
                accumulatedTime: user.accumulatedTime + time,
            });
            updateLevel(state.id, roles);
        }
    },
};

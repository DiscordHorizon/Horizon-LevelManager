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

async function updateLevel(user, roles) {
    const exp = await levelsModel.findOne({ name: "Exp Table" });
    const userReq = await userModel.findOne({ id: user.id });
    var userLevel = 1;
    exp.expTable.forEach((lvl) => {
        if (userReq.accumulatedTime >= lvl.exp) {
            userLevel = lvl.level;
        }
    });
    await userReq.updateOne({ level: userLevel });
    setLevel(user, roles);
}

module.exports = {
    async userConnection(channelID, user, roles) {
        const userReq = await userVerify(user.id);

        if (channelID) {
            await userReq.updateOne({ lastConnection: Date.now() });
        } else {
            time = Date.now() - userReq.lastConnection;
            await userReq.updateOne({
                accumulatedTime: userReq.accumulatedTime + time,
            });
            updateLevel(user, roles);
        }
    },
};

module.exports.config = {
 name: "nicknameall",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "Khánh Milo",
 description: "Set nicknames all tv",
 commandCategory: "other",
 usages: "setall [name]",
 cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
 var threadInfo = await api.getThreadInfo(event.threadID)
    var idtv = threadInfo.participantIDs
 console.log(threadInfo)
 const name = args.join(" ")
 function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    for(let setname of idtv) {
 await delay(800)
 api.changeNickname(`${name}`, event.threadID, setname);
    }
}
module.exports.info = {
	name: "busy",
	version: "1.0.1",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Bật hoặc tắt chế độ busy",
        short: "Bận hở? Dùng đi!"
    },
	group: "Dành Cho Thành Viên",
	guide: [
		'[để trống hoặc thêm lí do]',
	],
	countdown: 20
};

module.exports.handleEvents = async function({ api, event, multiple, Users }) {
    var { senderID, threadID, messageID, mentions } = event;
    var busyList = multiple.busyList;
    if (!busyList) return;
    if (busyList.has(senderID)) {
        await Users.setData(senderID, {
            active: {
                status: false,
                lido: ""
            }
        });
        return api.sendMessage(`Chào mừng bạn đã quay trở lại! 🥰`, threadID, () => {
            var info = busyList.get(senderID);
            if (info.tag.length == 0) api.sendMessage("Trong lúc bạn đi vắng, không có ai nhắc đến bạn cả", threadID);
            else {
                var msg = "";
                for (var i of info.tag) {
                    msg += `${i}\n`
                }
                api.sendMessage("Đây là danh sách những tin nhắn bạn được tag trong khi bạn đi vắng:\n\n" + msg, threadID)
            }
            busyList.delete(senderID);
        }, messageID);
    }

    if (!mentions || Object.keys(mentions).length == 0 || senderID == api.getCurrentUserID()) return;
    
    for (const [ID, name] of Object.entries(mentions)) {
        if (busyList.has(ID)) {
            var infoBusy = busyList.get(ID), mentioner = await Users.getData(senderID), replaceName = event.body.replace(`${name}`, "");
            infoBusy.tag.push(`${mentioner.name}: ${replaceName == "" ? "Đã tag bạn 1 lần" : replaceName}`)
            busyList.set(ID, infoBusy)
            await Users.setData(ID, { active: infoBusy })
            return api.sendMessage(`${name.replace("@", "")} hiện đang bận${infoBusy.lido ? ` với lý do: ${infoBusy.lido}.` : "."}`, threadID, messageID);
        }
    }
}

module.exports.run = async function({ api, event, multiple, Users, Cherry }) {
    var fullTime = await Cherry.getTime('fullTime');
    const { threadID, senderID, messageID, body } = event;
    var data = await Users.getData(senderID);
    var content = body.slice(6), msg = "";
    if (data.active.status == false) {
        await Users.setData(senderID, {
            active: {
                status: true,
                lido: content,
                date: fullTime,
                tag: []
            }
        });
        multiple.busyList.set(senderID, {
            status: true,
            lido: content,
            date: fullTime,
            tag: []
        })
    }
    (content.length == 0 ? msg += 'Bạn đã bật chế độ busy mà không có lí do' : msg += `Bạn đã bật chế độ busy với lí do: ${content}`);
    return api.sendMessage(msg, threadID, messageID)
}

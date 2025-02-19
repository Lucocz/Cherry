module.exports.info = {
	name: "setwelcome",
    version: "1.0.0",
    permissions: 1,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Đổi tin nhắn chào mừng khi có thành viên mới tham gia nhóm",
        short: "Tin nhắn chào mừng"
    },
	group: "Box Settings",
	guide: [
		'[gif/text] [Lời chào/link]',
	],
	countdown: 5
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = require("fs-extra");
    const { join } = require("path");

    const path = join(__dirname, "..", "specialEvents", "cache");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    return;
}

module.exports.run = async function ({ args, event, api, Threads, Cherry }) {
    try {
        const { existsSync, createReadStream } = require("fs-extra");
        const { join } = require("path");
        const { threadID, messageID } = event;
        const msg = args.slice(1, args.length).join(" ");
        var data = await Threads.getData(threadID);

        switch (args[0]) {
            case "text": {
                data.msgWelcome = msg;
                await Threads.setData(threadID, data);
                return api.sendMessage("Đã lưu tùy chỉnh của bạn thành công! dưới đây sẽ là phần preview:", threadID, function () {
                    const body = msg
                    .replace(/\{name}/g, "[Tên thành viên]")
                    .replace(/\{type}/g, "[Bạn/các bạn]")
                    .replace(/\{soThanhVien}/g, "[Số thành viên]")
                    .replace(/\{threadName}/g, "[Tên nhóm]");
                    return api.sendMessage(body, threadID);
                });
            }
            case "gif": {
                const path = join(__dirname, "..", "events", "cache", "joinGif");
                const pathGif = join(path, `${threadID}.gif`);
                if (msg == "remove") {
                    if (!existsSync(pathGif)) return api.sendMessage("Nhóm của bạn chưa từng cài đặt gif join", threadID, messageID);
                    unlinkSync(pathGif);
                    return api.sendMessage("Đã gỡ bỏ thành công file gif của nhóm bạn!", threadID, messageID);
                }
                else {
                    if (!msg.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:gif|GIF)/g)) return api.sendMessage("Url bạn nhập không phù hợp!", threadID, messageID);
                    try {
                        await Cherry.downloadFile(msg, pathGif);
                    } catch (e) { return api.sendMessage("Không thể tải file vì url không tồn tại hoặc bot đã xảy ra vấn đề về mạng!", threadID, messageID); }
                    return api.sendMessage({ body: "Đã lưu file gif của nhóm bạn thành công, bên dưới đây là preview:", attachment: createReadStream(pathGif) }, threadID, messageID);
                }
            }
            default: {
                return;
            }
        }
    } catch (e) { return console.log(e) };
}
module.exports.info = {
	name: "daily",
	version: "1.0.1",
	permissions: 1,
	author: {
		name: "Henry && TLin && Hưng Bún",
		facebook: "https://facebook.com/s2.henry - https://www.facebook.com/hung.nguyentuan.1044186 - https://www.facebook.com/tlinh.72"
	},
	description: {
        long: "Báo danh hàng ngày để kiếm tiền chơi MiniGame...",
        short: "Báo danh hàng ngày"
    },
	group: "Jobs",
	guide: [
		'',
	],
	countdown: 5
};

module.exports.run = async ({ event, api, Others }) => {
    var countdown = 86400000;
    let coinReward = 5000;
    let info = await Others.getData(event.senderID);
    var dailyTime = info.dailyTime;
    if (dailyTime - (Date.now() - countdown) > 0) {
        var time = countdown - (Date.now() - dailyTime),
            hours = Math.floor((time / 60000) / 60),
            minutes = Math.floor((time / 60000) / 24),
            seconds = ((time % 60000) / 1000).toFixed(0);
		return api.sendMessage(`Bạn đang trong thời gian chờ\nVui lòng thử lại sau:${hours < 10 ? (hours > 0 ? " 0" + hours + " giờ" : "") : (hours > 0 ? " " + hours + " giờ" : "")} ${minutes < 10 ? (minutes > 0 ? " 0" + minutes + " phút" : "") : (minutes > 0 ? " " + minutes + " phút" : "")}${seconds < 10 ? (seconds > 0 ? " 0" + seconds + " giây" : "") : (seconds > 0 ? " " + seconds + " giây!" : "")}`, event.threadID);
    } else return api.sendMessage(`Bạn đã nhận ${coinReward} coins, bạn có thể báo danh tiếp sau 24 giờ.`, event.threadID, async () => {
			info.money = info.money + coinReward;
			info.dailyTime = Date.now();
			await Others.setData(event.senderID, info);
    })
}
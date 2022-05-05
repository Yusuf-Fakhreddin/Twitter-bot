const CronJob = require("cron").CronJob;
const {
	SalaTweet,
	ManarTweet,
	NightDuaaTweet,
	RizkDuaaTweet,
} = require("./tweets");

// cron job every friday at midnight egypt time
export const SaluAlaElnabi = new CronJob(
	"0 0 0 * * 5",
	SalaTweet,
	null,
	false,
	"Africa/Cairo"
);

// cron job every friday at 02:00 pm egypt time
export const Manar = new CronJob(
	"0 2 * * 5",
	ManarTweet,
	null,
	false,
	"Africa/Cairo"
);

export const RizkDuaa = new CronJob(
	"0 10 * * 1,3",
	RizkDuaaTweet,
	null,
	false,
	"Africa/Cairo"
);

export const NightDuaa = new CronJob(
	"0 10 * * 0,2,4",
	NightDuaaTweet,
	null,
	false,
	"Africa/Cairo"
);

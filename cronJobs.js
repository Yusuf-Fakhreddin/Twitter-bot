const CronJob = require("cron").CronJob;
const { SalaTweet, ManarTweet, duaaTweet } = require("./tweets");

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

export const duaa = new CronJob(
	"0 0 * * 1,2,3,4,6,0",
	duaaTweet,
	null,
	false,
	"Africa/Cairo"
);

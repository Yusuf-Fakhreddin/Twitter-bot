const CronJob = require("cron").CronJob;
const {
	SalaTweet,
	ManarTweet,
	IstghfarTweet,
	Ist3azaTweet,
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

export const Ist3aza = new CronJob(
	"0 10 * * 1,3",
	Ist3azaTweet,
	null,
	false,
	"Africa/Cairo"
);

export const Istghfar = new CronJob(
	"0 10 * * 0,2,4",
	IstghfarTweet,
	null,
	false,
	"Africa/Cairo"
);

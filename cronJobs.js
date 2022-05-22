const CronJob = require("cron").CronJob;
const { SalaTweet, ManarTweet, duaaTweet } = require("./tweets");

// cron job every friday at midnight egypt time
const SaluAlaElnabi = new CronJob(
	"0 0 0 * * 5",
	SalaTweet,
	null,
	false,
	"Africa/Cairo"
);

// cron job every friday at 02:00 pm egypt time
const Manar = new CronJob(
	"0 14 * * 5",
	ManarTweet,
	null,
	false,
	"Africa/Cairo"
);

const duaa = new CronJob(
	"0 0 * * 0,2,4",
	duaaTweet,
	null,
	false,
	"Africa/Cairo"
);

// export cron jobs
module.exports = { SaluAlaElnabi, Manar, duaa };

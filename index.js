// import cron jobs
const { SaluAlaElnabi, Manar, duaa } = require("./cronJobs");

SaluAlaElnabi.start();
Manar.start();
duaa.start();

export const test = async () => {
	const tweet = {
		status: "test",
	};

	try {
		const result = await T.post("statuses/update", tweet);
		console.log("test");
	} catch (err) {
		console.log(err);
	}
};

test();

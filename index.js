// import cron jobs
import { SaluAlaElnabi, Manar, duaa } from "./cronJobs";

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

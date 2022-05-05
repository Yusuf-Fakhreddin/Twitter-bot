const T = require("./twitterClient");

export const SalaTweet = async () => {
	const tweet = {
		status:
			"إِنَّ ٱللَّهَ وَمَلَٰٓئِكَتَهُۥ يُصَلُّونَ عَلَى ٱلنَّبِىِّ ۚ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ صَلُّواْ عَلَيْهِ وَسَلِّمُواْ تَسْلِيمًا",
	};

	try {
		const result = await T.post("statuses/update", tweet);
		console.log("SalaTweet");
	} catch (err) {
		console.log(err);
	}
};

export const ManarTweet = async () => {
	const tweet = {
		status:
			"اللهم ارحم منار السيد واغفر لها ذنبها وادخلها فسيح جناتك واجعل مرضها شفيعا لها يوم القيامه",
	};

	try {
		const result = await T.post("statuses/update", tweet);
		console.log("ManarTweet");
	} catch (err) {
		console.log(err);
	}
};

export const Ist3azaTweet = async () => {
	const tweet = {
		status:
			"اللَّهُمَّ إنِّي أعُوذُ بكَ مِنَ العَجْزِ والكَسَلِ، والجُبْنِ والبُخْلِ والهَرَمِ، وأَعُوذُ بكَ مِن عَذابِ القَبْرِ، وأَعُوذُ بكَ مِن فِتْنَةِ المَحْيا والمَماتِ",
	};

	try {
		const result = await T.post("statuses/update", tweet);
		console.log("Ist3azaTweet");
	} catch (err) {
		console.log(err);
	}
};

export const IstghfarTweet = async () => {
	const tweet = {
		status: "أستغفِرُ اللهَ، الذي لا إله إلا هو، الحَيَّ القيومَ، وأتوبُ إليه",
	};

	try {
		const result = await T.post("statuses/update", tweet);
		console.log("IstghfarTweet");
	} catch (err) {
		console.log(err);
	}
};

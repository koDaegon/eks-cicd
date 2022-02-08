const fetch = require("node-fetch");
const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

let rednerDog = async (req, res, next) => {
	const imgSrc = await getRandomDogimage(dogApiUrl);
	res.render("dog", {
		title: "Display Random Dog Image",
		breeds: `breeds : ${parseBreed(imgSrc)}`,
		photo: imgSrc
	});
};

const getRandomDogimage = async url => {
	const res = await fetch(url);
	const json = await res.json();
	return json.message;
};

const parseBreed = param => {
	const breeds = param.split("breeds/")[1];
	return breeds ? breeds.split("/")[0] : "Breeed not found";
};

module.exports = {
	rednerDog: rednerDog,
	getRandomDogimage: getRandomDogimage,
	parseBreed: parseBreed
};

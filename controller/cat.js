const fetch = require("node-fetch");
const catApiUrl = "https://api.thecatapi.com/v1/images/search";

let rednerCat = async (req, res, next) => {
	const imgSrc = await getRandomCatimage(catApiUrl);
	res.render("dog", {
		title: "Display Random Cat Image",
		photo: imgSrc
	});
};

const getRandomCatimage = async url => {
	const res = await fetch(url);
	const json = await res.json();
	return json[0].url;
};

module.exports = {
	rednerCat: rednerCat,
	getRandomCatimage: getRandomCatimage
};

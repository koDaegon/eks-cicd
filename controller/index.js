let index = (req, res, next) => {
	res.render("index", {
		title: "EKS-Enablement",
		subtitle: "SamsungSDS"
	});
};

module.exports = {
	index: index
};

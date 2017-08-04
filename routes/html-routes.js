var path = require("path");

module.exports = function(app) {


//main page landing
	app.get("/", function(req, res) {
		res.sendfile(path.join(__dirname, "../views/landing.html"));
	});

	app.get("/index", function(req, res) {
		res.sendFile(path.join(__dirname, "../views/index.html"));
	});	
	app.get("/about", function(req, res) {
		res.sendFile(path.join(__dirname, "../views/about.html"));
	});
	app.get("/contact", function(req, res) {
		res.sendFile(path.join(__dirname, "../views/contact.html"));
	});
	app.get("/chart", function(req, res) {
		res.sendFile(path.join(__dirname, "../views/chart.html"));
	});

};
var db = require('../models');

exports.signUp = function(req, res){
	res.render("landing.html");
}

exports.register = function(req, res){
	db.User.find({where: {email: req.email}}).success(function(user){
		if(user) {
			db.User.create({email: req.body.email, password: req.body.password}).error(function(err){
				console.log(err)
			});
		}else{
			res.redirect('/index')
		}
	})
	res.redirect('/')
}
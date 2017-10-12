// var mongoose=require("mongoose");
// var config=require("./config.js");
// module.exports=function(){
// 	var db= mongoose.connect("mongodb://localhost:27017");
// 	// require("../models/user.server.model.js")
// 	var UserSchema=new mongoose.Schema({
// 	uid:Number,
// 	username:String,
// 	createTime:Date,
// 	lastLogin:Date
// 	});
// 	mongoose.model("User",UserSchema);
// 	return db;
// }

var mongoose=require("mongoose");
var config=require("./config.js");
module.exports=function(){
	var db= mongoose.connect(config.mongodb);
	require("../models/user.server.model.js")
	return db;
}
var mongoose = require('mongoose');
mongoose.connect('mongodb://nobey.cn/opop');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});
var UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  sex: String
});
var User = mongoose.model("user", UserSchema);
var user1 = new User({
  name: "Jack",
  age: 23,
  birthday: new Date()
});
user1.save()

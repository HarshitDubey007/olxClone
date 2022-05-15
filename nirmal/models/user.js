const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// mongoose.promise = Promise;
// const { String } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    username: { type: String },
    email: { type: String, required: true, trim: true, unique: true,},
    hash_password: {type: String,},
    gender: {type: String},
    mobile: {type: Number,required: true,unique: true },
  },
  { timestamps: true }
);

UserSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync("password", 10);
});


UserSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compare(password, this.hash_password);
  },
};


const User = mongoose.models.User || mongoose.model("User", UserSchema);
module.exports = User;

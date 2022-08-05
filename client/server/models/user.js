const mongoose = require("mongoose");
 const jwt = require("jsonwebtoken");
 const Joi = require("joi");
 const passwordComplexity = require("joi-password-complexity");

 const userSchema = new mongoose.Schema({
 	firstName: { type: String, required: false },
 	lastName: { type: String, required: false },
 	email: { type: String, required: false },
 	password: { type: String, required: false },
 });

 userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
 		expiresIn: "7d",
	});
 	return token;
 };

 const User = mongoose.model("user", userSchema);

 const validate = (data) => {
 	const schema = Joi.object({
 		firstName: Joi.string().required().label("First Name"),
 		lastName: Joi.string().required().label("Last Name"),
 		email: Joi.string().email().required().label("Email"),
 		password: passwordComplexity().required().label("Password"),
 	});
 	return schema.validate(data);
 };



 module.exports = { User, validate };


//  const studentSchema = new Schema({

//  	name: {

// 		type: String,
// 		required: true,
// 	},
// 	email: {
// 		type: String,
// 		required: true
// 	}
// });


// const Student = mongoose.model("student", studentSchema);
// export default mongoose.model("Student", studentSchema);


// module.exports = { Student };

// const studentSchema = new mongoose.Schema({
// 	 	name: { type: String, required: true },
	 	 
// 	 	email: { type: String, required: true }
	 	 
// 	 });

// 	const Student = mongoose.model("student", studentSchema);
// 	module.exports = { Student };
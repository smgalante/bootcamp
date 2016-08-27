/* Mongoose Example (Students) (18.3.03)
 * ===================================== */ 

// dependency
var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;

// instantiate a userSchema object with the Schema class we just made
var UserSchema = new Schema({

username: {
	type: String,
	trim: true,
	required: "String is required"
},
	password: {
		type: String,
		unique: true,
		required: true
	},

	email: {
		type: String,
		match: [/.+\@.+\..+/, "Please enter a valid email address"]
	},

	boolean: Boolean,

	array: Array,

	date:{
		type: Date,
		default: Date.now
	}
	/* TODO: 
	 * Add four entries into our schema. These should be:
	 *
	 * 1: A string. This needs to be required, and also trimmed.
	 * 2: A password. This needs to be requied, trimmed, and at least 6 chars.
	 * 3: An email. It must be unique in our collection, and must be a valid email.
	 * 4: A date. It should be the current date.
	 *
	 * TIP: The regex for checking if a string is an email is: /.+\@.+\..+/
	 * Use that with the model attribute that checks for a valid match.
	 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

});

UserSchema.methods.coolness = function(){
	this.username = this.username + '...the Coolest!';
	return this.username;
};

// create the "User" model with our UserSchema schema
var User = mongoose.model('User', UserSchema);

// export the User model, so it can be used in server.js with a require.
module.exports = User;

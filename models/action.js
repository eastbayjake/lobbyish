var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ActionSchema = new Schema({
	account: {type: ObjectId, ref: 'Account'},
	user: {type: ObjectId, ref: 'User'},
  voter: {type: ObjectId, ref: 'Voter'},
  bill: {type: ObjectId, ref: 'Bill'},
  step: {type: ObjectId, ref: 'Step'},
  description: String,
  complete_by: Date,
  created_by: {type: ObjectId, ref: 'User', required: true},
  created_at: {type: Date, default: Date.now},
});

mongoose.model('Action', ActionSchema);
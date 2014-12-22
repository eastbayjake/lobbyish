var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var VoterSchema = new Schema({
	account: {type: ObjectId, ref: "Account", required: true},
  name: String,
  created_by: {type: ObjectId, ref: 'User', required: true},
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Voter', VoterSchema);
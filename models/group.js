var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var GroupSchema = new Schema({
	account: {type: ObjectId, ref: 'ObjectId'},
	type: {type: String, enum: ['Party', 'Committee', 'Subcommittee']},
  name: String,
  created_by: {type: ObjectId, ref: 'User', required: true},
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Group', GroupSchema);
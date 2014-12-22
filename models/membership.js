var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var MembershipSchema = new Schema({
	voter: {type: ObjectId, ref: 'Voter'},
	group: {type: ObjectId, ref: 'Group'},
  status: {type: String, enum: ['Active', 'Inactive', 'Deleted'], default: 'Active'},
  title: String,
  created_by: {type: ObjectId, ref: 'User', required: true},
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Membership', MembershipSchema);
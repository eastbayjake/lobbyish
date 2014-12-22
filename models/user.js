var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  account: {type: ObjectId, ref: 'Account', required: true},
  status: {type: String, enum: ['Pending', 'Active', 'Inactive', 'Banned', 'Deleted'], default: 'Pending'},
  role: {type: String, enum: ['Admin', 'User', 'Guest'], default: 'User'},
  name: String,
  email: String,
  created_by: {type: ObjectId, ref: 'User'},
  created_at: {type: Date, default: Date.now}
});

mongoose.model('User', UserSchema);

// TODO: Login/Auth information
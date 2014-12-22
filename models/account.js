var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var AccountSchema = new Schema({
  status: {type: String, enum: ['Pending', 'Active', 'Inactive', 'Deleted'], default: 'Pending'},
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Account', AccountSchema);

// TODO: Billing information
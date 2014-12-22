var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BillSchema = new Schema({
  account: {type: ObjectId, ref: 'Account', required: true},
  status: {type: String, enum: ['Active', 'Tabled', 'Dead', 'Deleted'], default: 'Active'},
  description: String,
  created_by: {type: ObjectId, ref: 'User', required: true},
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Bill', BillSchema);
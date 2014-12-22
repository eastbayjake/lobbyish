var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var StepSchema = new Schema({
  bill: {type: ObjectId, ref: 'Bill', required: true},
  description: String,
  required_majority: Number,
  created_by: {type: ObjectId, ref: 'User', required: true},
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Step', StepSchema);
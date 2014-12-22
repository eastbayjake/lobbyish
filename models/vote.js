var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var VoteSchema = new Schema({
  voter: {type: ObjectId, ref: 'Voter', required: true},
  bill: {type: ObjectId, ref: 'Bill', required: true},
  step: {type: ObjectId, ref: 'Step'},
  prediction: {type: Number, enum: [0, 1, 2, 3, 4, 5], default: 0},
  actual: {type: Number, enum: [0, 1, 2, 3, 4, 5], default: 0},
  created_by: {type: ObjectId, ref: 'User', required: true},
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Vote', VoteSchema);
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter excercise type'
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter exercise name'
      },
      duration: {
        type: Number,
        required: 'Enter exercise duration (minutes)'
      },
      distance:{
        type: Number
      },
      weight:{
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
});

const Tracker = mongoose.model("Tracker", workoutSchema);

module.exports = Tracker;
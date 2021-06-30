const router = require("express").Router();
const Workout = require("../models/Workout.js");

//total duration?

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({day: 1})
        .then(dbWorkout => {
            res.json(dbWorkout.slice(-7));
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
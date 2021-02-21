const db = require("../models");

const express = require('express');
const router = express.Router();

module.exports = router => {

    router.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });

    });

    router.put('/api/workouts/:id', (req, res)  => {
        var id = req.params.id;
        var data = req.body;
        db.Workout.findOneAndUpdate(
                { _id: id },
                { $push: { exercises: data }},
                { new: true }
            ).then(data => {
                res.json(data);
            }).catch(err => {
                res.json(err);
            });
    });

    router.post('/api/workouts', (req, res)  => {
        db.Workout.create({}).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });
    });

    router.get('/api/workouts/range', (req, res)  => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });


};
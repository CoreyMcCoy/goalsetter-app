const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    const text = req.body.text;
    if (!text) {
        res.status(400);
        throw new Error('Please add a goal');
    }
    const goal = await Goal.create({
        text: text,
    });

    res.status(201).json(goal);
});

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (goal) {
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(updatedGoal);
    } else {
        res.status(404);
        throw new Error('Goal not found');
    }
});

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (goal) {
        await goal.remove();
        res.status(200).json({ id: req.params.id });
    } else {
        res.status(404);
        throw new Error('Goal not found');
    }
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};

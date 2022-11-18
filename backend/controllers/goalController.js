// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    try {
        res.status(200).json({ message: 'Get goals' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
    try {
        res.status(200).json({ message: 'Set goal' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    try {
        res.status(200).json({ message: `Update goal ${req.params.id}` });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    try {
        res.status(200).json({ message: `Delete goal ${req.params.id}` });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};

const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a goal'],
            trim: true,
            maxlength: [150, 'Goal cannot be more than 150 characters'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Goal', goalSchema);

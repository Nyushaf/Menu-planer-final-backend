const mongoose = require('mongoose');

const weeklyMenuSchema = new mongoose.Schema({
    auth0_id: {
        type: String,
        required: true
    },
    weekName: {
        type: String,
        required: true
    },
    days: [{
        id: {
            type: String,
            required: true,
            unique: true 
        },
        dayName: {
            type: String,
            required: true
        },
        breakfast: String,
        lunch: String,
        dinner: String,
        ingredients: String
    }]
});

module.exports = mongoose.model('WeeklyMenu', weeklyMenuSchema);

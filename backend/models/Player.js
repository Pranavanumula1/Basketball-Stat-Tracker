const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gamesPlayed: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    rebounds: {
        type: Number,
        required: true
    },
    assists: {
        type: Number,
        required: true
    },
    steals: {
        type: Number,
        required: true
    },
    blocks: {
        type: Number,
        required: true
    },
    turnovers: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Player', PlayerSchema);

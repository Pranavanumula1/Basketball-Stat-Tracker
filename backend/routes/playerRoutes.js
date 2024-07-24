const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const player = new Player({
        name: req.body.name,
        gamesPlayed: req.body.gamesPlayed,
        points: req.body.points,
        rebounds: req.body.rebounds,
        assists: req.body.assists,
        steals: req.body.steals,
        blocks: req.body.blocks,
        turnovers: req.body.turnovers
    });

    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

'use strict'

const router = require('express').Router();
const repoRouter = require('./repo');

router.use('/repos', repoRouter);

router.use('/ability', (req, res) => {
    res.send(req.ability.rules);
    console.log("Auto diploy test");
});

module.exports = router;
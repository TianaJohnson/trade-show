const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// create new builder (post)
router.post('/', (req, res, next) => {
    console.log(req.body);
    if (req.isAuthenticated()) {
        const queryText = " INSERT INTO "
    }
});


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
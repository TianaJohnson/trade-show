const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// create new builder (post)
router.post('/add', (req, res, next) => {
    console.log(req.body);
    if (req.isAuthenticated()) {
        const queryText = ` INSERT INTO "initial_intake"
        ("show",
        "location",
        "show_date",
        "first_name",
        "last_name",
        "state",
        "city",
        "country",
        "brand")
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING "id";`
        pool.queary(quearyText, [req.body.show,
                                 req.body.location,
                                 req.body.show_date,
                                 req.body.first_name,
                                 req.body.last_name,
                                 req.body.state,
                                 req.body.country,
                                 req.body.brand
                                 ])
        .then
    }
});


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
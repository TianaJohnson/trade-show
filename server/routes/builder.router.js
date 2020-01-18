const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/builder', (req, res, next) => {
    console.log(req.body);
if (req.isAuthenticated()) {
    const queryText = ` INSERT INTO "show_intake"
    ("brand",
    "first_name",
    "last_name",
    "build_state",
    "build_city",
    "build_country"
    VALUES ( $1, $2, $3, $4, $5, $6) WHERE "show_id" = $7;`
    pool.query(queryText, [req.body.brand,
                             req.body.first_name,
                             req.body.last_name,
                             req.body.build_city,
                             req.body.build_state,
                             req.body.build_country
                             ])
                             .catch((error) => {
                                console.log('Something went wrong in POST new builder', error);
                                res.sendStatus(500);
                            });
                        } else {
                            res.sendStatus(403);
                        }
                    
});




module.exports = router;
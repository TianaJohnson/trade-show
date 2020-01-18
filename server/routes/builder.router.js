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
    VALUES ( $1, $2, $3) WHERE "show_id" = $1;`
    pool.query(queryText, [req.body.show,
                             req.body.location,
                             req.body.show_date,
                             req.body.city,
                             req.body.state,
                             req.body.country
                             ])
                             .catch((error) => {
                                console.log('Something went wrong in POST new product', error);
                                res.sendStatus(500);
                            });
                        } else {
                            res.sendStatus(403);
                        }
                    
});




module.exports = router;
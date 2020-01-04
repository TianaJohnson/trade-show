const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//**upon intake, name and date are not showing up */
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
        pool.query(queryText, [req.body.show,
                                 req.body.location,
                                 req.body.show_date,
                                 req.body.first_name,
                                 req.body.last_name,
                                 req.body.city,
                                 req.body.state,
                                 req.body.country,
                                 req.body.brand
                                 ])
                                 .then(() => {
                                    res.sendStatus(201);
                                }).catch((error) => {
                                    console.log('Something went wrong in POST new product', error);
                                    res.sendStatus(500);
                                });
                            } else {
                                res.sendStatus(403);
                            }
                        
    });

router.get('/show', (req, res) => {
    console.log('In show information git')
})

module.exports = router;
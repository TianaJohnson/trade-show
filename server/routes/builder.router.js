const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//"put" because I am updating it
router.put('/:id', (req, res, next) => {
    console.log(req.body, req.user.id);
    console.log('params', req.params.id);
if (req.isAuthenticated()) {
    const queryText = `UPDATE "bulder_intake"
    SET "brand",
        "first_name" = $1,
        "last_name" = $2,
        "build_state" = $3,
        "build_city" = $4,
        "build_country" = $5
        WHERE "show_id" = $7;`
    pool.query(queryText, [req.body.brand,
                             req.body.first_name,
                             req.body.last_name,
                             req.body.build_city,
                             req.body.build_state,
                             req.body.build_country,
                             req.params.id
                             ])
                             .then(() => {
                                console.log('server side builder Post');
                                res.sendStatus(201);
                            })
                             .catch((error) => {
                                console.log('Something went wrong in POST new builder', error);
                                res.sendStatus(500);
                            });
                        } else {
                            res.sendStatus(403);
                        }
                    
});


router.get('/:id', (req, res) => {
    console.log('in GET builer get id ')
    console.log('req.params: project get', req.user.id);
    if (req.isAuthenticated()) {
        console.log('req.user:', req.user.id);
        pool.query(`SELECT * FROM "builder_intake"
                    JOIN "show_intake" ON "builder_intake"."show_id" = "show_intake"."id"
                    WHERE "builder_intake"."show_id" = $1;`, [req.params.id])
            .then(results => {
                console.log(results.rows[0])
                res.send(results.rows[0])
            })
            .catch(error => {
                console.log('Error making SELECT for builder database:', error);
                res.sendStatus(500);
            });
    } else {
      // They are not authenticated.
      res.sendStatus(403);
    }
  });




module.exports = router;
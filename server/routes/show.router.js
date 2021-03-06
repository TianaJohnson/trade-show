const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

//**upon intake, name and date are not showing up */
// C- create
router.post("/add", (req, res, next) => {
  console.log(req.body);
  if (req.isAuthenticated()) {
    const queryText = ` INSERT INTO "show_intake"
        ("show",
        "show_date",
        "state",
        "city",
        "country")
        VALUES ( $1, $2, $3, $4, $5) RETURNING "id";`;
    pool
      .query(queryText, [
        req.body.show,
        req.body.show_date,
        req.body.state,
        req.body.city,
        req.body.country
      ])
      .then(results => {
        // Insert empty project for new customer
        const anotherQuery = `INSERT INTO "builder_intake"
                                         ("show_id") 
                                          VALUES ($1);`;
        pool
          .query(anotherQuery, [results.rows[0].id])
          .then(() => {
            console.log("Show attached to builder", req.body);
            res.sendStatus(201);
          })
          .catch(error => {
            res.sendStatus(500);
          });
      })
      .catch(error => {
        console.log("Something went wrong in POST new show", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

//R-Read
router.get("/", (req, res) => {
  console.log("In show information git");
  if (req.isAuthenticated()) {
    console.log("req.user:", req.user);
    pool
      .query(
        `SELECT * FROM "show_intake" 
                    ORDER BY "id" DESC;`
      )
      .then(results => {
        console.log(results.rows);
        res.send(results.rows);
      })
      .catch(error => {
        console.log("Error making SELECT for initial-intake database:", error);
        res.sendStatus(500);
      });
  } else {
    // They are not authenticated.
    res.sendStatus(403);
  }
});

//          //D-delete
// Delete is not working, I dont have it in me to debufg today
// more likly something ins the saga or redux then in The server
router.delete('/delete/:id', (req, res) => {
  if (req.isAuthenticated()) {
    console.log("in delete router", req.params.id);
    const id = [req.params.id];
    const queryText = `DELETE FROM "show_intake" WHERE "id" = $1`;
    pool
      .query(queryText, id)
      .then(response => {
        res.sendStatus(200);
      })
      .catch(error => {
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;

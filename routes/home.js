const router = require("express").Router()
const db = require("../model/db.js")
const sys_data = require("../system_data.js")

router.get("*", (req, res) => {
  res.status(200).render("home.ejs", {
    sys_data: sys_data,
    db: db,
  })
})

module.exports = router

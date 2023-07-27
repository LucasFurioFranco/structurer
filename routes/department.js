const router = require("express").Router()

router.get("*", (req, res) => {
  res.status(200).render("department.ejs")
})

module.exports = router

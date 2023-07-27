const router = require("express").Router()

router.get("*", (req, res) => {
  res.status(200).render("generic.ejs")
})

module.exports = router

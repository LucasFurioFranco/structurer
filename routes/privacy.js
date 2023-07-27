const router = require("express").Router()

router.get("*", (req, res) => {
  res.status(200).render("privacy.ejs")
})

module.exports = router

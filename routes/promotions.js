const router = require("express").Router()

router.get("*", (req, res) => {
  res.status(200).render("promotions.ejs")
})

module.exports = router

const router = require("express").Router()

router.get("*", (req, res) => {
  res.status(200).render("user_purchases.ejs")
})

module.exports = router

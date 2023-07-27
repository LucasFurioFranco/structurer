const router = require("express").Router()

router.get("*", (req, res) => {
  res.status(200).render("payment.ejs")
})

module.exports = router

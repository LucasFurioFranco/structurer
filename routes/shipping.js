const router = require("express").Router()

router.get("*", (req, res) => {
  res.status(200).render("shipping.ejs")
})

module.exports = router

const router = require("express").Router()

router.get("*", (req, res) => {
  res.status(200).render("shipping_addresses.ejs")
})

module.exports = router

const router = require("express").Router()

router.get("*", (req, res) => {
  res.status(200).render("thankyou.ejs")
})

module.exports = router

const router = require("express").Router()

router.get("*", (req, res) => {
  res.status(200).render("user_data.ejs")
})

module.exports = router

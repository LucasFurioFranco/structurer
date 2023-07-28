const router = require("express").Router()
const model_method = require("../model/db.js").method
const sys_data = require("../system_data.js")

router.get("*", (req, res) => {
  res.status(200).render("home.ejs", {
    sys_data: sys_data,
    shelfs: {
      slot_1: model_method.product.search_by_name("") //Returns all products in "db"
    }
  })
})

module.exports = router

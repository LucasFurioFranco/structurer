const express    = require('express')

const app = express()
const port = 7060;
const sys_name = "structurer-docker-www V0"


//################################################################


//MIddlewares

//For "understanding" URL query parameters less painfully
app.use(express.urlencoded({extended: true}))

//For "understanding" JSON payloads less painfully
app.use(express.json())

//We are using ejs to create page templates and render them
app.set("view engine", "ejs")


//################################################################



//################################################################

//Routes

app.use( "^/$",                 require( "./routes/home"               ) )
app.use( "/home",               require( "./routes/home"               ) )
app.use( "/department",         require( "./routes/department"         ) )
app.use( "/category",           require( "./routes/category"           ) )
app.use( "/search",             require( "./routes/search"             ) )
app.use( "/product",            require( "./routes/product"            ) )
app.use( "/cart",               require( "./routes/cart"               ) )
app.use( "/register",           require( "./routes/register"           ) )
app.use( "/shipping",           require( "./routes/shipping"           ) )
app.use( "/shipping_addresses", require( "./routes/shipping_addresses" ) )
app.use( "/payment",            require( "./routes/payment"            ) )
app.use( "/payment_register",   require( "./routes/payment_register"   ) )
app.use( "/thankyou",           require( "./routes/thankyou"           ) )
app.use( "/user_data",          require( "./routes/user_data"          ) )
app.use( "/user_purchases",     require( "./routes/user_purchases"     ) )
app.use( "/privacy",            require( "./routes/privacy"            ) )
app.use( "/promotions",         require( "./routes/promotions"         ) )
app.use( "*",                   require( "./routes/generic"            ) )


//################################################################

//Sets the port to be listened
app.listen(port, () => {
  console.log(`${sys_name} listening at http://localhost:${port}`)
});

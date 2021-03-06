const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
import userRouter from './routers/userRouter.js'
import foodRouter from './routers/foodRouter.js'
import recipeRouter from './routers/recipeRouter.js'
import profilRouter from './routers/profilRouter.js'
import objetTest from './routers/test'
const cors = require('cors')
import config from './config.js'

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use('/', userRouter)
app.use('/', foodRouter)
app.use('/', recipeRouter)
app.use('/', profilRouter)
app.use('/', objetTest.testRouter)

app.listen(port, () => {
    console.log('App listening on port ' + port)
})

module.exports = userRouter
module.exports = foodRouter
module.exports = recipeRouter
module.exports = profilRouter
module.exports = objetTest.testRouter


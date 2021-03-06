const express = require('express')
const app = express()
const controller = require('./../controllers/user')
const bodyParser = require('body-parser')


let userRouter = express.Router()
app.use(bodyParser.json())
 userRouter.use(function(req, res, next) {
     next()
 })
// app.use('/', routes)

// usersRouter.get('/', (req, res, next) => {
//     res.send(users)
// })

userRouter.get('/user/:id', (req, res) => {
    controller.find(req.params.id, (err, user) => {
        //err, user vient de ma callback controller
        console.log(req.params.id)
        if (err) {
            res.status(500).send(err)
        }
       else {
           res.status(200).send(user)
       }
    })
    
})

userRouter.post('/user', (req, res) => {
    console.log(req.params)
    console.log('user created')
    console.log(req.body)
    controller.create(req.body, (err, message) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send({message: message})
            //renvoyer un objet est la maniere clean de faire
        }
    }) 
})

userRouter.put('/user/:id', (req, res) => {
    controller.update(req.params.id, req.query, (err) => {
        if (err) {
            res.status(500).send(err)

        } else {
            res.status(200).send({message: 'user modified '})
        }
    })  
})

userRouter.delete('/user/:id', (req, res) => {
    controller.delete(req.params.id, (err) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send({message: 'user well deleted'})
        }
    })
   
})

userRouter.get('/login', (req, res) => {
    // console.log('admin login')
    // console.log(req.query)
    // console.log(req.body)
    // console.log(req.params)
    controller.login(req.query, (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } else {
            console.log("ok")
            res.status(200).send(data)
            // console.log(data)
        }
    })
 })
 app.use('/', userRouter)

module.exports =  userRouter

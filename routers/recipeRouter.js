const express = require('express')
const app = express()
const controller = require('./../controllers/recipe')
const bodyParser = require('body-parser')


let recipeRouter = express.Router()
app.use(bodyParser.json())

recipeRouter.use(function(req, res, next) {
     next()
 })


recipeRouter.get('/recipes', (req, res) => {
    controller.find(req.query, (err, recipes) => {
        // console.log(req.query)
        if (err) {
            res.status(500).send(err)
        } else {
           res.status(200).send(recipes)
        //    console.log(recipes)
       }
    })
    
})
recipeRouter.post('/recipe/:userId', (req, res) => {
    controller.create(req.params.userId, req.body, (err, message) => {
         console.log(req.body)
        //  console.log(req.params)
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send({message: message})
        }
    }) 
})

recipeRouter.put('/recipe/:id', (req, res) => {
    controller.update(req.params.id, req.query, (err) => {
        if (err) {
            res.status(500).send(err)

        } else {
            res.status(200).send({message: 'recipe modified well'})
        }
    })  
})

recipeRouter.delete('/recipe/:id', (req, res) => {
    controller.delete(req.params.id, (err) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send({message: 'recipe well deleted'})
        }
    })
   
})

 app.use('/', recipeRouter)

module.exports =  recipeRouter

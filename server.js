var express = require('express')
var next = require('next')
var bodyParser = require('body-parser')
var models = require('./models')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandle = nextApp.getRequestHandler()


models.sequelize.sync().then(() => {
    nextApp.prepare().then(() => {
        /* Server parameters */
        const server = express()
        server.use(bodyParser.json())
        server.use(bodyParser.urlencoded({extended: true}))

        /* Routes */
        server.get('/api/posts/:id/', (req, res) => {
            models.Post.findById(req.params.id).then((p) => {
                if (p) res.json(p)
                else {
                    res.status(404).send("NOT FOUND")
                }
            })
        })

        server.get('/api/posts/', (req, res) => {
            models.Post.findAll().then((posts) => {
                res.json(posts)
            })
        })

        server.post('/api/posts/', (req, res) => {
            let p = models.Post.build(req.body)
            p.save(model => {
                if (this !== model){
                    // something went wrong
                    console.log(model)
                }  
                else {
                    res.json(p)
                }
            })
        })

        /* next.js handler */
        server.all('*', (req, res) => {
            return nextHandle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('>> Ready on http://localhost:3000')
        })
    })
})

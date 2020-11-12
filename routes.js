const {validationResult} = require('express-validator')
const userValidate = require('./validator').userValidate

const setRoutes = (app) => {
    if (!app) return false

    app.get('/', (req, res) => res.send('Hello beautiful people!'))
    app.get('/name', (req, res) => {
        const {name, surname} = req.query
        const message = `Hi there, ${name} ${surname}!`
        return res.send(message)
    })
    app.post('/user', userValidate, (req, res) => { 
        const validatorErrors = validationResult(req);
        if (!validatorErrors.isEmpty()){
            return res.status(400).json({errors: validatorErrors.array()})
        }

        if (req.body){
            const {name, surname, age} = req.body
            const message = `User (${name}, ${surname}, ${age}) was created!`
            return res.status(200).send(message)
        }else{
             return res.status(403).send('Error adding user!')
        }
    })
    app.get('/jsonify', (req, res) => {
        const query = req.query
        const {name, surname} = query
        return res.json({name, surname})
    })
    app.get('/cookie', (req, res) => {
        res.cookie('username', 'jova')
        res.cookie('name', 'Srdjan')
        return res.status(200).end()
    })
    app.get('/redirect', (req, res) => {
        res.redirect('/')
        return res.end()
    })
    app.get('/uppercase/:value', (req, res) => {
        const value = req.params.value
        const upper = value.toUpperCase();
        return res.status(200).json({upper})
    })

    return true
}

module.exports.setRoutes = setRoutes;
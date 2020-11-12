const setRoutes = (app) => {
    if (!app) return false

    app.get('/', (req, res) => res.send('Hello beautiful people!'))
    app.get('/name', (req, res) => {
        const {name, surname} = req.query
        const message = `Hi there, ${name} ${surname}!`
        res.send(message)
    })
    app.post('/user', (req, res) => {
        const user = req.body
        if (user){
            const {name, surname, age} = user
            const message = `User (${name}, ${surname}, ${age}) was created!`
            res.status(200).send(message)
        }else{
            res.status(403).send('Error adding user!')
        }
    })
    app.get('/jsonify', (req, res) => {
        const query = req.query
        const {name, surname} = query
        res.json({name, surname})
    })
    app.get('/cookie', (req, res) => {
        res.cookie('username', 'jova')
        res.cookie('name', 'Srdjan')
        res.status(200).end()
    })
    app.get('/redirect', (req, res) => {
        res.redirect('/')
        res.end()
    })
    app.get('/uppercase/:value', (req, res) => {
        const value = req.params.value
        const upper = value.toUpperCase();
        res.status(200).json({upper})
    })

    return true
}

module.exports.setRoutes = setRoutes;
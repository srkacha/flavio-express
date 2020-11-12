const express = require('express')
const app = express()
const setRoutes = require('./routes').setRoutes

const port = 3000

// Application modules
app.use(express.urlencoded())

// Setting some simple routes
const status = setRoutes(app)

// Running the app to listen on selected port
if (status){
    app.listen(port, () => {
        console.log('The server is listening on port: ' + port)
    })
}else{
    console.log('The server could not be started...')
}


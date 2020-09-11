const express = require('express')
const path = require('path')
const ejs = require('ejs')
const routes = require('./routes')
const bode = require('body-parser')



const server = express()

//const PORT = 3500

//settings
//server.set('port', PORT)
server.set('views', path.join(__dirname, '/views'))
server.engine('html', ejs.renderFile)
server.use(bode.urlencoded({ extended: false }))
server.use(routes)


//server
/*server.listen(server.get('port'), () => {
    console.log(`Server started at http://localhost:${server.get('port')}`)
})*/



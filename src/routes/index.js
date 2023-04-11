const addRouter = require('./coin')
const homeRouter = require('./home')

function route(app) {

    app.use('/coin', addRouter)
    app.use('/', homeRouter)
    
}

module.exports = route
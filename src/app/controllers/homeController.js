const Coin = require('../models/coin');

class HomeController{
    stored(req, res, next){
        Coin.find({})
        .then(coins => {
            coins = coins.map(coin => coin.toObject())
            res.render('home', { coins })
        })
        .catch(next)
    }
}

module.exports = new HomeController;
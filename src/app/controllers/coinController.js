const Coin = require('../models/coin');
const {multipleMongooseObject, mongooseToObject} = require('../../unti/moongoose');
class AddController{

    // [get] coin/create
    create(req,res, next){
        res.render('coin/create')
    }

    //[post] coin/stored
    store(req,res, next){
        const coin = new Coin(req.body)
        coin.save()
            .then(() => res.redirect(`/`))
            .catch(error =>{

            })
        // res.json(req.body)
    }

    // [put] 
    update(req, res, next){
        Coin.findById(req.params.id)
        .then(coin =>  res.render('coin/update', {
            coin : mongooseToObject(coin)
        }))
        .catch(next)
    }

    editsave(req,res,next){
        Coin.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/'))
        .catch(next)
    }


    // [delete]
    delete(req,res,next){
        Coin.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next)
    }
}

module.exports = new AddController
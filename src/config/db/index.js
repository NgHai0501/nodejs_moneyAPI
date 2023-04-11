const mongoose = require('mongoose');
function connect(){
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/money_API', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("success!");
    }catch (error){
        console.log("fail!");
    }
}

module.exports = { connect }
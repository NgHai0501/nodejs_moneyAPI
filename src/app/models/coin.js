const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Coin = new Schema({
    name: String,
    national: String,
    sign: String,
    exchange_rate : String,
    createdAt: {type : Date, default: Date.now},
    updateAt: {type : Date, default: Date.now},
  });

  module.exports = mongoose.model('Coin', Coin);
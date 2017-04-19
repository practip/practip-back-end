'use strict'

const Lucid = use('Lucid')

class Challenge extends Lucid {


  instrument() {
    return this.belongsTo('App/Model/Instrument');
  }

  posts() {
    return this.hasMany('App/Model/Post', 'id', 'challenge_id');
  }
}

module.exports = Challenge

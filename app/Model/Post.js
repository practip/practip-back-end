'use strict'

const Lucid = use('Lucid')

class Post extends Lucid {

  challenge() {
    this.belongsTo('App/Model/Challenge')
  }

  comments() {
    return this.hasMany('App/Model/Comment', 'id', 'post_id');
  }

  user() {
    return this.belongsTo('App/Model/User', 'id', 'user_id');
  }
}

module.exports = Post

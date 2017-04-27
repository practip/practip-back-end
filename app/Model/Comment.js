'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {
  post() {
    this.belongsTo('App/Model/Post')
  }

  user() {
    return this.belongsTo('App/Model/User', 'id', 'user_id');
  }
}

module.exports = Comment

'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {
  post() {
    this.belongsTo('App/Model/Post')
  }
}

module.exports = Comment

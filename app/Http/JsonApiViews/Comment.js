const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Comment extends JsonApiView {
  get attributes() {
    return ['body'];
  }

  post() {
    return this.belongsTo('App/Http/JsonApiViews/Post', {
      included: true,
      excludeRelation: 'comment'
    });
  }

  user() {
    return this.belongsTo('App/Http/JsonApiViews/User', {
      included: false,
      ref: 'slug',
      excludeRelation: 'comments'
    });
  }
}

module.exports = Comment;

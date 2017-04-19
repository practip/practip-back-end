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
}

module.exports = Comment;

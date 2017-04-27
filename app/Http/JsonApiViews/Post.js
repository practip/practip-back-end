const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Post extends JsonApiView {
  get attributes() {
    return ['title', 'description', 'video_url', 'youtube_id'];
  }

  comments() {
    return this.hasMany('App/Http/JsonApiViews/Comment', {
      included: true,
      excludeRelation: 'post'
    });
  }

  challenge() {
    return this.belongsTo('App/Http/JsonApiViews/Challenge', {
      included: true,
      excludeRelation: 'posts'
    });
  }

  user() {
    return this.belongsTo('App/Http/JsonApiViews/User', {
      included: false,
      ref: 'slug',
      excludeRelation: 'posts'
    });
  }

}

module.exports = Post;

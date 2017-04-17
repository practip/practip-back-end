const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Challenge extends JsonApiView {
  get attributes() {
    return ['title', 'description'];
  }

  posts() {
    return this.hasMany('App/Http/JsonApiViews/Post', {
      included: true,
      excludeRelation: 'challenge'
    });
  }

  instrument() {
    return this.belongsTo('App/Http/JsonApiViews/Instrument', {
      included: true,
      ref: 'slug',
      excludeRelation: 'challenges'
    });
  }

}

module.exports = Challenge;

'use strict';

const Post = use('App/Model/Post');
const attributes = ['title', 'description', 'video-url', 'youtube-id'];
const withRelations = ['comments', 'user'];

class PostController {

  * index(request, response) {
    const posts = yield Post.with(...withRelations).fetch();

    response.jsonApi('Post', posts);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      challenge_id: request.jsonApi.getRelationId('challenge'),
      user_id: request.authUser.id,
    };
    const post = yield Post.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Post', post);
  }

  * show(request, response) {
    const id = request.param('id');
    const post = yield Post.with(...withRelations).where({ id }).firstOrFail();

    response.jsonApi('Post', post);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const post = yield Post.with(...withRelations).where({ id }).firstOrFail();
    post.fill(Object.assign({}, input, foreignKeys));
    yield post.save();

    response.jsonApi('Post', post);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const post = yield Post.query().where({ id }).firstOrFail();
    yield post.delete();

    response.status(204).send();
  }

}

module.exports = PostController;

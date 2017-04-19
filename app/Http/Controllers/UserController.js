'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');
const attributes = ['email', 'password', 'username'];
const E = require('node-exceptions');

class UserController {

  * login(request, response) {
    const { username, password } = request.all();

    try {
      const user = yield User.findBy('username', username);
      const passwordValid = yield Hash.verify(password, user.password);

      if (!passwordValid) {
        throw { };
      }

      const token = yield request.auth.generate(user);
      response.json({ token });
    } catch (e) {
      response.status(401).json({
        errors: [
          {
            status: 401,
            title: 'User failed to log in.',
          },
        ],
      });
    }
  }

  * index(request, response) {
    const users = yield User.with().fetch();

    response.jsonApi('User', users);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };
    const user = yield User.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('User', user);
  }

  * show(request, response) {
    const id = request.param('id');
    const user = yield User.with().where({ id }).firstOrFail();

    response.jsonApi('User', user);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const user = yield User.with().where({ id }).firstOrFail();
    user.fill(Object.assign({}, input, foreignKeys));
    yield user.save();

    response.jsonApi('User', user);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const user = yield User.query().where({ id }).firstOrFail();
    yield user.delete();

    response.status(204).send();
  }

}

module.exports = UserController;

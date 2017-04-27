'use strict';

const Challenge = use('App/Model/Challenge');
const Instrument = use('App/Model/Instrument');
const attributes = ['title', 'description'];
const withRelations = ['instrument', 'posts', 'user'];

class ChallengeController {

  * index(request, response) {
    const challenges = yield Challenge.with(...withRelations).fetch();

    response.jsonApi('Challenge', challenges);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);

    const {id: instrument_id} = yield Instrument.query().where({slug: request.jsonApi.getRelationId('instrument')}).first();

    const foreignKeys = {
      instrument_id,
      user_id: request.authUser.id,
    };

    const challenge = yield Challenge.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Challenge', challenge);
  }

  * show(request, response) {
    const id = request.param('id');
    const challenge = yield Challenge.with(...withRelations).where({ id }).firstOrFail();

    response.jsonApi('Challenge', challenge);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const {id: instrument_id} = yield Instrument.query().where({slug: request.jsonApi.getRelationId('instrument')}).first();

    const foreignKeys = {
      instrument_id,
    };

    const challenge = yield Challenge.with(...withRelations).where({ id }).firstOrFail();
    challenge.fill(Object.assign({}, input, foreignKeys));
    yield challenge.save();

    response.jsonApi('Challenge', challenge);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const challenge = yield Challenge.query().where({ id }).firstOrFail();
    yield challenge.delete();

    response.status(204).send();
  }

}

module.exports = ChallengeController;

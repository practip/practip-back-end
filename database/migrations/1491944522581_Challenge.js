'use strict';

const Schema = use('Schema');

class ChallengeSchema extends Schema {

  up() {
    this.create('challenges', (table) => {
      table.increments();
      table.string('title');
      table.text('description');

      table.integer('instrument_id').references('instruments.id');
      table.integer('user_id');
      table.timestamps();
    });
  }

  down() {
    this.drop('challenges');
  }

}

module.exports = ChallengeSchema;

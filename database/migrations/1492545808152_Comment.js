'use strict';

const Schema = use('Schema');
//user_id to print user

class CommentSchema extends Schema {

  up() {
    this.create('comments', (table) => {
      table.increments();
      table.string('body');
      table.integer('post_id');
      table.integer('user_id');
      table.timestamps();
    });
  }

  down() {
    this.drop('comments');
  }

}

module.exports = CommentSchema;

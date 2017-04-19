'use strict';

const Schema = use('Schema');

class PostSchema extends Schema {

  up() {
    this.create('posts', (table) => {
      table.increments();
      table.string('title');
      table.string('description');

      table.string('video_url');
      table.string('youtube_id');
      table.string('challenge_id');
      table.integer('user_id');
      table.timestamps();
    });
  }

  down() {
    this.drop('posts');
  }

}

module.exports = PostSchema;

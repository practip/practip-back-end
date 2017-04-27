'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.group('protected', function() {
  Route.resource('/instruments', 'InstrumentController').except(['create', 'store', 'update', 'edit']);
  Route.resource('/challenges', 'ChallengeController').except(['create', 'edit']);
  Route.resource('/posts', 'PostController').except(['create', 'edit']);
  Route.resource('/comments', 'CommentController').except(['create', 'edit']);
}).middleware('auth')

Route.resource('/users', 'UserController').only(['store']);
Route.post('/token-auth', 'UserController.login');

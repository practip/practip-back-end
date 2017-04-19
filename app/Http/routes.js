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

Route.resource('/instruments', 'InstrumentController').except(['create', 'store', 'update', 'edit']);
Route.resource('/challenges', 'ChallengeController').except(['create', 'edit']);
Route.resource('/posts', 'PostController').except(['create', 'edit']);
<<<<<<< HEAD
Route.resource('/comments', 'CommentController').except(['create', 'edit']);
=======
Route.resource('/users', 'UserController').only(['store']);
Route.post('/token-auth', 'UserController.login');
>>>>>>> 2de7db73379321a1220c5ffb5e8a8565808d194e

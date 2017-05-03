/*
This file define controller for Post, this class extend from Controller class.
With this extended class, this class obtain all methodd from parent class
*/
'use strict'
// Require parent class
let Controller = require('./Controller');
// Require model (schema) use with this controller
let Post = require('../models/post')

class PostsController extends Controller {


	constructor() {
		super(Post)
	}

// 	find(req, res, next) {
//     // we should use a global config file for nbOfPostsByPage

//     let query = this.model.find();
// }

}

module.exports = PostsController

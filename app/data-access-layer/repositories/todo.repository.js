const Repository = require('./repository');
const TodoModel = require('../schemas/todo.schema');

class UserRepository extends Repository{

	constructor(){
		super();
		this.model = TodoModel;
	}

}

module.exports = new UserRepository();
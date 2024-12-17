const Dt_ToDo = require('../config/database');

//View ALL Todo List
exports.getToDoList = function(callback){
    Dt_ToDo.query('SELECT * FROM list_todo_tabs', callback);
};

//View by id Todo List
exports.getIdToDoList = function(id, callback){
    Dt_ToDo.query('SELECT * FROM list_todo_tabs where id = ?', [id], callback);
};

//New Todo List
exports.createToDoList = function(newId, callback){
    Dt_ToDo.query('INSERT INTO list_todo_tabs SET ?', newId, callback);
};

//Update Todo List
exports.UpdateToDoList = function(id, Update, callback){
    Dt_ToDo.query('UPDATE list_todo_tabs SET ? where id = ?', [Update,id],callback);
};

//Delete Todo List
exports.DelToDoList = function(id, callback){
    Dt_ToDo.query('DELETE FROM list_todo_tabs where id = ?', [id],callback);
};
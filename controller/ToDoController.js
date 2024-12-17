const ToDo = require('../models/ToDoModel');

//View ALL Todo List
exports.getToDoList = function(req, res) {
    ToDo.getToDoList((err, todos) => {
        if (err) throw err;
        res.json(todos);
    });
};

//View by id Todo List
exports.getIdToDoList = function(req, res) {
    ToDo.getIdToDoList(req.params.id, (err, todos) => {
        if (err) throw err;
        res.json(todos);
    });
};

//New Todo List
exports.createToDoList = function(req, res){
    const Dat_ToDo = {
        Judul_Task: req.body.Judul_Task, 
        Jenis_Task: req.body.Jenis_Task, 
        Desc_Task: req.body.Desc_Task, 
        Tgl_Task: req.body.Tgl_Task, 
        Tgl_Selesai: req.body.Tgl_Selesai, 
        Total_Jam: req.body.Total_Jam, 
        Status_Task: req.body.Status_Task, 
        Created_At: req.body.Created_At, 
        Create_Date: req.body.Create_Date,
        Update_At: req.body.Update_At, 
        Update_Date: req.body.Update_Date
    };
    ToDo.createToDoList(Dat_ToDo, (err, result) => {
        if (err) throw err;
        res.json({message: "Sukses buat data"});
    });
};

//Update Todo List
exports.UpdateToDoList = function(req, res){
    const Dat_ToDo = {
        Judul_Task: req.body.Judul_Task, 
        Jenis_Task: req.body.Jenis_Task, 
        Desc_Task: req.body.Desc_Task, 
        Tgl_Task: req.body.Tgl_Task, 
        Tgl_Selesai: req.body.Tgl_Selesai, 
        Total_Jam: req.body.Total_Jam, 
        Status_Task: req.body.Status_Task, 
        Created_At: req.body.Created_At, 
        Create_Date: req.body.Create_Date,
        Update_At: req.body.Update_At, 
        Update_Date: req.body.Update_Date
    };
    ToDo.UpdateToDoList(req.params.id, Dat_ToDo, (err, result) => {
        if (err) throw err;
        res.json({message: "Sukses ubah data"});
    });
};

//Delete Todo List
exports.DelToDoList = function(req, res) {
    ToDo.DelToDoList(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({message: "Sukses hapus data"});
    });
};
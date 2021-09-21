const User  = require('../../model/db');
const mongoose = require("mongoose");

exports.form = (req,res) => {
    res.render("index");
};

exports.getUsers = (req,res) => {
    User.find({}, (err, data) => {
        if (err) throw err;
        else  res.render("users.ejs", {data:data})
    })
};
exports.postUser = (req,res) => {
   if (!req.body) {
       res.status(400).status({message: "cannot be empty"});
       return ;
   }
   const user = new User ({
       _id : new mongoose.Types.ObjectId(),
       name: req.body.name, 
       age: req.body.age, 
       occupation: req.body.occupation, 
       about: req.body.about
   })
   user.save(user)
   .then(data => {
       res.redirect("/get")
   }).catch(err => {
       res.status(500).send({
           message: err.message || "some error occured"
       });
   });
};

exports.getUser = (req,res) => {
    const id = req.params.id
    const user = User.findById(id)
    .then(data => {
        res.render("user", {data: data})
    }).catch(err => console.log(err))
};

exports.updateUser = (req,res) => {
    const id = req.params.id;
    const user = User.findById(id)
    .then(data => {
        res.render("formUpd.ejs", {data: data})
    }).catch(err => console.log(err))
};

exports.postUpdUser = (req,res) => {
    let id = req.params.id;
    const data = {}
    data.name = req.body.name,
    data.age = req.body.age,
    data.about = req.body.about,
    data.number = req.body.occupation

    let query = {_id : id}
    User.findOneAndUpdate(query, data)
    .then(res.render("user", {data: data}))
    .catch(err => console.log(err))
};

exports.deleteUser = (req,res) => {
    let id = req.params.id;
    User.findByIdAndRemove(id)
    .then(data => res.redirect('/get'))
    .catch(err => console.log(err));
}
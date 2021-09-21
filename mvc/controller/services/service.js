const User  = require('../../model/db');


exports.form = (req,res) => {
    res.render("index");
};

exports.getUsers = (req,res) => {
    User.find({}, (err, data) => {
        if (err) throw err;
        else res.send(data)
    })
};
exports.postUser = (req,res) => {
   if (!req.body) {
       res.status(400).status({message: "cannot be empty"});
       return ;
   }
   const user = new User ({
       name: req.body.name, 
       age: req.body.age, 
       occupation: req.body.occupation, 
       about: req.body.about
   })
   user.save(user)
   .then(data => {
       res.send(data)
   }).catch(err => {
       res.status(500).send({
           message: err.message || "some error occured"
       });
   });
};
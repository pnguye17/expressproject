const User = require("../model/User");

module.exports = {
  index: async (req, res) => {
      const x = "Sam"
      try {
        const foundUser = await User.find({firstName: x})
        console.log("data from mongo",foundUser)
        res.status(200).json(foundUser)
      } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
      }
    }}     
    
    // create: async (req, res) => {
    //     try {
    //         const newUser = {

    //         }
    //     }
    // }
//   },
//   edit: async (req, res
//     try {
//       const editUser = await User.findById(req.params.id);
//       res.render("users/edit.ejs", {
//         user: editUser,
//         id: req.params.id
//       });
//     } catch (err) {
//       res.send(err);
//     }
//   },
//   update: async (req, res) => {
//     try {
//       const user = await User.findById(req.params.id);
//       if (!req.body.password) {
//         delete req.body.password;
//       } else {
//         req.body.password = user.hashPassword(req.body.password);
//         console.log(req.body.password);
//       }
//       const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
//       console.log(req.body);
//       console.log(updatedUser);
//       res.redirect("/events");
//     } catch (err) {
//       res.send(err);
//     }
//   },
//   show: async (req, res) => {
//     try {
//       const foundUser = await User.findById(req.params.id);
//       console.log(foundUser._id, req.session.usersDbId);
//       res.render("users/show.ejs", {
//         user: foundUser,
//         sessionId: req.session.usersDbId
//       });
//     } catch (err) {
//       res.send(err);
//     }
//   },
//   destroy: async (req, res) => {
//     try {
//       const deletedUser = await User.findByIdAndDelete(req.params.id);
//       console.log(deletedUser);
//       res.redirect("/");
//     } catch (err) {
//       res.send(err);
//     }
//   

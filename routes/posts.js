//HTTPS requests
const express = require("express");
const Posts = require("../models/posts");
const router = express.Router();

/////////////////////////////////////
const multer = require("multer");
const Articles = require("../models/articles");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

/////////////////////////////////////

//save posts
router.post("/post/save", (req, res) => {
  let newPost = new Posts(req.body);
  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: "Posts saved successfully",
    });
  });
});

//get posts
router.get("/posts", (req, res) => {
  Posts.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: posts,
    });
  });
});

//get  employee posts
// router.get("/empposts", (req, res) => {
//   Posts.find().exec((err, posts) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     return res.status(200).json({
//       success: true,
//       existingPosts: posts,
//     });
//   });
// });

//User interface save posts
router.get("/userPosts", (req, res) => {
  Posts.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: posts,
    });
  });
});

//Employee create posts
// router.get("/empCreatxe", (req, res) => {
//   Posts.find().exec((err, posts) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     return res.status(200).json({
//       success: true,
//       existingPosts: posts,
//     });
//   });
// });

//update post
router.put("/post/update/:id", (req, res) => {
  Posts.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Updated Successfully",
      });
    }
  );
});

//get specific post
router.get("/post/:id", (req, res) => {
  let postId = req.params.id;

  Posts.findById(postId, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  });
});

//delete post
router.delete("/post/delete/:id", (req, res) => {
  Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccesful",
        err,
      });
    return res.json({
      message: "Delete Successful",
      deletedPost,
    });
  });
});
module.exports = router;

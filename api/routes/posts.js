const router = require("express").Router();
const User = require("../models/User")
const Post = require("../models/Post")

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (e) {
        return res.status(500).json(e);
    }
});

router.put("/:id", async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({$set: req.body});
            res.status(200).json("The post has been updated");
        } else {
            res.status(403).json("You can update only your post")
        }
    } catch (e) {
        return res.status(500).json(e);
    }
});
router.delete("/:id", async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne({$set: req.body});
            res.status(200).json("The post has been deleted");
        } else {
            res.status(403).json("You can delete only your post")
        }
    } catch (e) {
        return res.status(500).json(e);
    }
});

router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("The post has been liked");
        } else {
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("The post has been disliked");
        }
    } catch (e) {
        return res.status(500).json(e);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (e) {
        return res.status(500).json(e);
    }
});

router.get("/timeline/:userId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendsPosts = await Promise.all(
            currentUser.followings.map(friendId => {
                return Post.find({userId: friendId});
            })
        )
        res.status(200).json(userPosts.concat(...friendsPosts));

    } catch (e) {
        return res.status(500).json(e);
    }
});

module.exports = router;
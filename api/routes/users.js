const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User")

router.put("/:id", async  (req,res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin){
        if (req.body.password){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch (e) {
                return res.status(500).json(e);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body});
            res.status(200).json("Account updated");
        }catch (e) {
            return res.status(500).json(e);
        }
    }else{
        return res.status(403).json("You can update only your account");
    }
 })

router.delete("/:id", async  (req,res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin){
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account deleted");
        }catch (e) {
            return res.status(500).json(e);
        }
    }else{
        return res.status(403).json("You can delete only your account");
    }
 });

router.get("/:id", async  (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const {password, updatedAt, ...other} = user._doc;
        res.status(200).json(other);
    }catch (e) {
        return res.status(500).json(e);
    }
 });

router.put("/:id/follow",  async(req, res) => {
    if (req.body.id !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followings: req.body.userId}})
                await currentUser.updateOne({$push: {followers: req.params.id}})
                res.status(200).json("User has been followed")
            }else {
                res.status(403).json("You already follow this user");
            }
        }catch (e) {
            return res.status(500).json(e);
        }
    }else {
        res.status(403).json("You can't follow yourself")
    }
 })
router.put("/:id/unfollow",  async(req, res) => {
    if (req.body.id !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followings.includes(req.body.userId)){
                await user.updateOne({$pull: {followings: req.body.userId}})
                await currentUser.updateOne({$pull: {followers: req.params.id}})
                res.status(200).json("User has been unfollowed")
            }else {
                res.status(403).json("You don't follow this user");
            }
        }catch (e) {
            return res.status(500).json(e);
        }
    }else {
        res.status(403).json("You can't unfollow yourself")
    }
 })

module.exports = router;
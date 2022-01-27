const router = require("express").Router();
const privateRoute = require("../middlewares/privateRoute");
const User = require("../models/User");

//get a user
router.get("/:id", privateRoute, async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    const { password, updatedAt, createdAt, ...otherData } = user._doc;
    res.status(200).json(otherData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update user
router.put("/:id", privateRoute, async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json("Account Updated successfully");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only update your account!");
  }
});

//delete user
router.delete("/:id", privateRoute, async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account deleted successfully");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only delete your account!");
  }
});

module.exports = router;

const router = require("express").Router();
const ChatUserPair = require("../models/ChatUserPair");
const privateRoute = require("../middlewares/privateRoute");

router.post("/add", privateRoute, async (req, res) => {
  const newChatUserPair = new ChatUserPair({
    members: [req.body.senderId, req.body.recieverId],
  });
  try {
    const ChatUserPair = await newChatUserPair.save();
    res.status(200).json(ChatUserPair);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/get/:userId", privateRoute, async (req, res) => {
  try {
    const user = await ChatUserPair.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

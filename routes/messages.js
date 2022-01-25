const router = require("express").Router();
const Message = require("../models/Message");
const privateRoute = require("../middlewares/privateRoute");

router.post("/add", privateRoute, async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const message = await newMessage.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/get/:chatId", privateRoute, async (req, res) => {
  try {
    const chats = await Message.find({ chatId: req.params.chatId });
    res.status(200).json(chats);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

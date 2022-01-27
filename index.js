const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const chatUserPairsRoutes = require("./routes/chatUserPairs");
const messagesRoutes = require("./routes/messages");

// spinnig the express app
const app = express();
// dotenv config
dotenv.config();

const PORT = process.env.PORT || 5000;

// connecting to database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () =>
  console.log("db connected")
);

// Handle CORS error
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
//   next();
// });

// middlewares
app.use(cors());
app.use(express.json());
// route middlewares
app.use("/api", authRoutes);
app.use("/api/user", profileRoutes);
app.use("/api/chat/user", chatUserPairsRoutes);
app.use("/api/chat/message", messagesRoutes);

app.listen(PORT, () => console.log(`App Runnig on port ${PORT}`));

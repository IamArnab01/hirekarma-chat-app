const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

// spinnig the express app
const app = express();
// dotenv config
dotenv.config();

const PORT = process.env.PORT || 5000;

// connecting to database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () =>
  console.log("db connected")
);

// middlewares
app.use(cors());
app.use(express.json());
// route middlewares
app.use("/api", authRoutes);
app.use("/api", profileRoutes);

app.listen(PORT, () => console.log(`App Runnig on port ${PORT}`));

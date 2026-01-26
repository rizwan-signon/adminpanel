import express from "express";
import userRoutes from "./routes/user.route.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use("/", userRoutes);
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

import express, { application } from "express";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use("/auth", userRoutes);
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

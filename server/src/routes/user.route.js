import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("server is working ");
});

export default router;

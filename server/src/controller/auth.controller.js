import sendEmail from "../configs/sendemail.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
const registerUser = async (req, res, next) => {
  try {
    const { fullName, email, password, phone } = req.body;

    if (!fullName || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const newUser = await User.create({
      fullName,
      email,
      password: hashPassword,
      phone,
      verificationToken,
    });
    const verifyurl = `${process.env.CLIENT_URL}/verify-email?token=${verificationToken}&id=${newUser._id}`;
    await sendEmail({
      to: email,
      subject: "Verify your email",
      html: `
        <h2>Email Verification</h2>
        <p>Click the link below to verify your email:</p>
        <a href="${verifyurl}">${verifyurl}</a>
      `,
    });
    res.status(201).json({
      message:
        "User registered. Please check your email to verify your account.",
    });
  } catch (error) {
    next(error);
  }
};

export { registerUser };

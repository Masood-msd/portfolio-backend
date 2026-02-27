import UserData from "../models/usersmodel.js";
import bcrypt from "bcrypt";

const home = async (req, res) => {
  try {
    res.status(200).send("Home page accessing using Controllers method");
  } catch (error) {
    console.log("error at home");
  }
};

// ================= To Post Register Data ====================

const register = async (req, res) => {
  try {
    const { username, email, number, password } = req.body;
    const mailExists = await UserData.findOne({ email: email });
    if (mailExists) {
      return res.status(400).json({ msg: "Email already Exists" });
    }
    const User = await UserData.create({
      username,
      email,
      number,
      password,
    });

    res.status(201).json({
      message: "User Created Successfully",
      token: await User.createToken(),
      UserId: User._id.toString(),
    });
  } catch (error) {
    console.log("LOGIN ERROR", error.message);
    return res.status(500).json({
      message: error.message,
    });
  }
};


// ===================== To Send Login Data ======================


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    const userExists = await UserData.findOne({ email });

    if (!userExists) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, userExists.password);
    //const isPasswordValid = await userExists.Validatepassword(password);

    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid Email or Password" });
    }

    res.status(200).json({
      message: "login Successful",
      token: await userExists.createToken(),
      Userid: userExists._id.toString(),
      isAdmin : userExists.isAdmin
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ======= To Get User Data from token ============

const User = async (req, res) => {
  try {
    const userData = req.user;

    //console.log("res ok from controller", userData);

    res.status(200).json({ userData });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      msg: "Technical Error",
    });
  }
};


export default { home, register, login, User };

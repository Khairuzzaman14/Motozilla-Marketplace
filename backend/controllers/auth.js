const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const register = async (req, res) => {
  try {
    const auth = await prisma.user.findUnique({
      where: { email: req.body.email },
    });

    if (auth) {
      return res.status(400).json({ status: "error", msg: "duplicate email" });
    }

    const hash = await bcrypt.hash(req.body.password, 12);

    await prisma.user.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        contactNo: req.body.contactNo,
        email: req.body.email,
        password: hash,
        isAdmin: req.body.isAdmin,
        cart: {
          create: {},
        },
      },
    });

    res.json({ status: "ok", msg: "user registered" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", msg: "invalid registration" });
  }
};

const login = async (req, res) => {
  try {
    const auth = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    if (!auth) {
      return res.status(400).json({ status: "error", msg: "not authorised" });
    }
    const userCart = await prisma.cart.findUnique({
      where: { userID: auth.userID },
    });

    const result = await bcrypt.compare(req.body.password, auth.password);
    if (!result) {
      // return res.status(401).json({status:"error", msg:"login failed"})
      return res
        .status(401)
        .json({ status: "error", msg: "email or password error" });
    }
    console.log("what is auth", auth);
    console.log("what is usercart", userCart);
    const payload = {
      // this data is decoded in front end for components to read
      email: auth.email,
      isAdmin: auth.isAdmin,
      cartID: userCart.cartID,
      userID: auth.userID,
      firstName: auth.firstName,
      lastName: auth.lastName,
    };

    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });

    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });

    res.json({ access, refresh });
    // res.json({ status: "ok", msg: "user logged in" });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ status: "error", msg: "login failed" });
  }
};

module.exports = {
  register,
  login,
};

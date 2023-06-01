const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const users = [
  {
    firstName: "Matthew",
    lastName: "Tan",
    address: "123 Tampines Ave 1",
    email: "MatthewTan@gmail.com",
    contactNo: 98765432,
    password: "password",
    isAdmin: false,
  },
  {
    firstName: "Muhammad",
    lastName: "Ali",
    address: "123 Bedok Reservoir Rd",
    email: "MuhdAli@gmail.com",
    contactNo: 98126789,
    password: "password",
    isAdmin: false,
  },
  {
    firstName: "Joseph",
    lastName: "Tan",
    address: "123 Pasir Ris Ave 1",
    email: "JosephTan@gmail.com",
    contactNo: 90129876,
    password: "password",
    isAdmin: false,
  },
];

const seedUsers = async (req, res) => {
  try {
    await prisma.user.deleteMany();

    for (const user of users)
      await prisma.user.create({
        data: user,
      });

    res.json({ status: "ok", message: "Data seeded" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding error" });
  } finally {
    await prisma.$disconnect();
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot get users" });
  } finally {
    await prisma.$disconnect();
  }
};

const putUsers = async (req, res) => {
  try {
    await prisma.user.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        email: req.body.email,
        contactNo: req.body.contactNo,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
      },
    });
    res.json({ status: "ok", message: "user saved" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error creating user" });
  } finally {
    await prisma.$disconnect();
  }
};

const postOneUser = async (req, res) => {
  try {
    const id = req.body.userID;
    const user = await prisma.user.findUnique({
      where: { userID: id },
    });

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting user" });
  } finally {
    await prisma.$disconnect();
  }
};

const patchUser = async (req, res) => {
  try {
    const id = req.body.userID;
    const newFirstName = req.body.firstName;
    const newLastName = req.body.lastName;
    const newAddress = req.body.address;
    const newEmail = req.body.email;
    const newContactNo = req.body.contactNo;
    const newPassword = req.body.password;
    const newIsAdmin = req.body.isAdmin;
    const updatedUser = await prisma.user.update({
      where: { userID: id },
      data: {
        firstName: newFirstName,
        lastName: newLastName,
        address: newAddress,
        email: newEmail,
        contactNo: newContactNo,
        password: newPassword,
        isAdmin: newIsAdmin,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating user" });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  seedUsers,
  getUsers,
  putUsers,
  postOneUser,
  patchUser,
};

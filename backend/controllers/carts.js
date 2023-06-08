const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCarts = async (req, res) => {
  try {
    const carts = await prisma.cart.findMany();

    res.json(carts);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot get carts" });
  } finally {
    await prisma.$disconnect();
  }
};

const putCarts = async (req, res) => {
  try {
    await prisma.cart.create({
      data: {
        userID: req.body.userID,
      },
    });
    res.json({ status: "ok", message: "cart saved" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error creating cart" });
  } finally {
    await prisma.$disconnect();
  }
};

const postOneCart = async (req, res) => {
  try {
    const cart = await prisma.cart.findUnique({
      where: { cartID: req.body.cartID },
    });

    res.json(cart);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting cart" });
  } finally {
    await prisma.$disconnect();
  }
};

const patchCart = async (req, res) => {
  try {
    const updatedCart = await prisma.cart.update({
      where: { cartID: req.body.cartID },
      data: {
        items: { connect: { itemID: req.body.itemID } },
      },
    });

    res.json(updatedCart);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating cart" });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteCart = async (req, res) => {
  try {
    const deletedCart = await prisma.cart.delete({
      where: { cartID: req.body.cartID },
    });
    res.json({ status: "ok", msg: "cart deleted" });
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error deleting cart" });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getCarts,
  putCarts,
  postOneCart,
  patchCart,
  deleteCart,
};

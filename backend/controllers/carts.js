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
  postOneCart,
  deleteCart,
};

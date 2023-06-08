const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const items = [
  {
    name: "Brembo SuperSport Brake Rotors",
    description:
      "The Brembo SuperSport Brake Rotors were developed with the goal of offering the very best high performance brake rotor for both European and Japanese sportbikes. Designed for use on either the street or track, these rotors will surely outperform anything else on the market. Under high stress a rotor can overheat and warp, transferring excess heat to the braking system causing it to wear out prematurely or fail entirely. The SuperSport Rotor’s friction surface is made of tempered martensitic steel which is capable of withstanding extreme thermo-mechanical stresses leading to more consistent performance over its lifecycle.",
    imgUrl:
      "https://www.revzilla.com/product_images/0209/5063/brembo_hp_brake_rotors_750x750.jpg",
    isSold: false,
    seller: {
      connect: {
        userID: "572c1101-87e6-4aea-a892-3999439fdadd",
      },
    },
    price: 600,
    type: "Brakes",
  },
  {
    name: "SuperSprox Stealth Rear Sprocket",
    description:
      "Originally designed for the KTM Dakar Rally Race Team, the SuperSprox Stealth Rear Sprocket is the go-to choice when there can be no compromises. While aluminum sprockets are coveted for their lightness, they wear out quickly, especially in rough conditions or on high horsepower machines. Steel sprockets might be durable enough to go the distance, but their comparatively higher weight makes them less than ideal for riders and race teams looking to squeeze every drop of performance from their machinery. The short comings of each material inspired SuperSprox to come up with a hybrid alternative. ",
    imgUrl:
      "https://www.revzilla.com/product_images/0373/0975/super_sprox_stealth_rear_sprocket_off_road_750x750.jpg",
    isSold: false,
    seller: {
      connect: {
        userID: "572c1101-87e6-4aea-a892-3999439fdadd",
      },
    },
    price: 150,
    type: "Drive and transmission",
  },
  {
    name: "Duraboost Lithium Ion Battery",
    description:
      "The Duraboost Lithium Ion Batteries are significantly smaller and extremely light-weight compared to standard OEM batteries. Increased cranking amps over lead-acid batteries lead to faster cranking for better starts. The built-in LED test gauge makes knowing how much charge you have as easy as possible and if you are on a low charge, fast recharging can achieve a 90% charge within 6 minutes. If you are looking to shed some weight from your bike on the street or track, reach for a Duraboost Lithium Ion Battery.",
    imgUrl:
      "https://www.revzilla.com/product_images/1800/2746/duraboost_lithium_ion_battery_750x750.jpg",
    isSold: true,
    seller: {
      connect: {
        userID: "71cdf164-1044-4830-bd26-9cb3f9a2244c",
      },
    },
    buyer: {
      connect: {
        userID: "3174748b-429f-44cc-aa4e-35df120e626d",
        // matthew buyer
      },
    },

    price: 200,
    type: "Batteries",
  },
];

const seedItems = async (req, res) => {
  try {
    await prisma.item.deleteMany();

    for (const item of items)
      await prisma.item.create({
        data: item,
      });

    res.json({ status: "ok", message: "Data seeded" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding error" });
  } finally {
    await prisma.$disconnect();
  }
};

const getItems = async (req, res) => {
  try {
    const userID = req.params.userID;

    const items = await prisma.item.findMany({
      where: {
        sellerID: {
          not: userID,
        },
        buyerID: null,
      },
    });

    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot get items" });
  } finally {
    await prisma.$disconnect();
  }
};

const putItems = async (req, res) => {
  try {
    await prisma.item.create({
      data: {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        isSold: req.body.isSold,
        price: req.body.price,
        sellerID: req.body.sellerID,
      },
    });
    res.json({ status: "ok", message: "item created" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error creating item" });
  } finally {
    await prisma.$disconnect();
  }
};

const patchBoughtItems = async (req, res) => {
  try {
    // check if itemId is sold
    await prisma.item.updateMany({
      // isSold = true, buyerID,dateTimeBought,removeFromCart
      where: {
        cartID: req.body.cartID,
      },

      data: {
        isSold: true,
        buyerID: req.body.buyerID,
        dateTimeBought: prisma.now,
        cartID: null,
        // cartID: req.body.cartID,
      },
    });
    res.json({ status: "ok", message: "item bought" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error buying item" });
  } finally {
    await prisma.$disconnect();
  }
};

const postOneItem = async (req, res) => {
  try {
    const item = await prisma.item.findUnique({
      where: { itemID: req.body.itemID },
    });

    res.json(item);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting item" });
  } finally {
    await prisma.$disconnect();
  }
};

const patchItem = async (req, res) => {
  try {
    const updatedItem = await prisma.item.update({
      where: { itemID: req.body.itemID },
      data: {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        isSold: req.body.isSold,
        price: req.body.price,
        sellerID: req.body.sellerID,
      },
    });

    res.json(updatedItem);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating item" });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteItem = async (req, res) => {
  try {
    const deletedItem = await prisma.item.delete({
      where: { itemID: req.body.itemID },
    });
    res.json({ status: "ok", msg: "item deleted" });
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error deleting item" });
  } finally {
    await prisma.$disconnect();
  }
};
const deleteItemFromCart = async (req, res) => {
  try {
    const deletedItem = await prisma.item.update({
      where: {
        itemID: req.body.itemID,
      },
      data: {
        cart: {
          disconnect: true,
        },
      },
    });
    res.json({ status: "ok", msg: "item removed from cart" });
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error deleting item" });
  } finally {
    await prisma.$disconnect();
  }
};

const getItemsFromCart = async (req, res) => {
  try {
    const items = await prisma.item.findMany({
      where: { cartID: parseInt(req.params.cartID) },
    });

    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot get items" });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  seedItems,
  getItems,
  putItems,
  patchBoughtItems,
  postOneItem,
  patchItem,
  deleteItem,
  getItemsFromCart,
  deleteItemFromCart,
};

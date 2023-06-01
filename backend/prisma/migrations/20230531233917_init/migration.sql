-- CreateTable
CREATE TABLE "User" (
    "userID" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contactNo" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Items" (
    "itemID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "isSold" BOOLEAN NOT NULL,
    "sellerID" TEXT NOT NULL,
    "buyerID" TEXT,
    "price" INTEGER NOT NULL,
    "dateTimeBought" TIMESTAMP(3) NOT NULL,
    "dateTimeListed" TIMESTAMP(3) NOT NULL,
    "userID" TEXT NOT NULL,
    "cartID" INTEGER NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("itemID")
);

-- CreateTable
CREATE TABLE "Cart" (
    "cartID" SERIAL NOT NULL,
    "itemID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cartID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Items_userID_key" ON "Items"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userID_key" ON "Cart"("userID");

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "Cart"("cartID") ON DELETE RESTRICT ON UPDATE CASCADE;

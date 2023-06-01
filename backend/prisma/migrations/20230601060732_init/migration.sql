/*
  Warnings:

  - You are about to drop the `Items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Items" DROP CONSTRAINT "Items_cartID_fkey";

-- DropForeignKey
ALTER TABLE "Items" DROP CONSTRAINT "Items_userID_fkey";

-- DropTable
DROP TABLE "Items";

-- CreateTable
CREATE TABLE "Item" (
    "itemID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "isSold" BOOLEAN NOT NULL,
    "sellerID" TEXT NOT NULL,
    "buyerID" TEXT,
    "price" INTEGER NOT NULL,
    "dateTimeBought" TIMESTAMP(3) NOT NULL,
    "dateTimeListed" TIMESTAMP(3) NOT NULL,
    "userID" TEXT NOT NULL,
    "cartID" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("itemID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_userID_key" ON "Item"("userID");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "Cart"("cartID") ON DELETE RESTRICT ON UPDATE CASCADE;

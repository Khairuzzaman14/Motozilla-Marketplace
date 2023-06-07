/*
  Warnings:

  - You are about to drop the column `itemID` on the `Cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userID]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Cart_itemID_userID_key";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "itemID",
ADD COLUMN     "cartID" SERIAL NOT NULL,
ADD CONSTRAINT "Cart_pkey" PRIMARY KEY ("cartID");

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "cartID" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userID_key" ON "Cart"("userID");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "Cart"("cartID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `userID` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_userID_fkey";

-- DropIndex
DROP INDEX "Cart_userID_key";

-- DropIndex
DROP INDEX "Item_userID_key";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "userID";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_sellerID_fkey" FOREIGN KEY ("sellerID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_buyerID_fkey" FOREIGN KEY ("buyerID") REFERENCES "User"("userID") ON DELETE SET NULL ON UPDATE CASCADE;

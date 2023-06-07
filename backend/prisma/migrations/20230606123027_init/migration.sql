/*
  Warnings:

  - The primary key for the `Cart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cartID` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `cartID` on the `Item` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[itemID,userID]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Made the column `itemID` on table `Cart` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_cartID_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_pkey",
DROP COLUMN "cartID",
ALTER COLUMN "itemID" SET NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "cartID",
ALTER COLUMN "dateTimeBought" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_itemID_userID_key" ON "Cart"("itemID", "userID");

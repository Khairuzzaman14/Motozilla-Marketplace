/*
  Warnings:

  - You are about to drop the column `img_url` on the `Items` table. All the data in the column will be lost.
  - Added the required column `imgUrl` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Items" DROP COLUMN "img_url",
ADD COLUMN     "imgUrl" TEXT NOT NULL;

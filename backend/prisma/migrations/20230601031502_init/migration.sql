/*
  Warnings:

  - Added the required column `type` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "type" TEXT NOT NULL;

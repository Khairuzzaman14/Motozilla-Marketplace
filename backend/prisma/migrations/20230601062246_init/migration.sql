-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "dateTimeBought" DROP NOT NULL,
ALTER COLUMN "dateTimeListed" SET DEFAULT CURRENT_TIMESTAMP;

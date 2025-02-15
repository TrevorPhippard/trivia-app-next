/*
  Warnings:

  - Added the required column `UserId` to the `UserAcct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserAcct" DROP CONSTRAINT "UserAcct_id_fkey";

-- AlterTable
ALTER TABLE "UserAcct" ADD COLUMN     "UserId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserAcct" ADD CONSTRAINT "UserAcct_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `status` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categories` ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL;

-- AlterTable
ALTER TABLE `expenses` ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL;

-- AlterTable
ALTER TABLE `income` ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL;

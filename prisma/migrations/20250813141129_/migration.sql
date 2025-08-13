/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "training_menus" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "required_function_id" BIGINT NOT NULL,
    "learning_material_id" BIGINT NOT NULL,
    "tips" TEXT NOT NULL,
    "common_errors" TEXT[],
    "target_muscles" TEXT[],
    "level" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "training_menus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "training_menus" ADD CONSTRAINT "training_menus_required_function_id_fkey" FOREIGN KEY ("required_function_id") REFERENCES "required_functions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "training_menus" ADD CONSTRAINT "training_menus_learning_material_id_fkey" FOREIGN KEY ("learning_material_id") REFERENCES "learning_materials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

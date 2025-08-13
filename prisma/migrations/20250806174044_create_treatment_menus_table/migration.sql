-- CreateTable
CREATE TABLE "treatment_menus" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "required_function_id" BIGINT NOT NULL,
    "learning_material_id" BIGINT NOT NULL,
    "tips" TEXT NOT NULL,
    "common_errors" TEXT[],
    "target_muscles" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "treatment_menus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "treatment_menus" ADD CONSTRAINT "treatment_menus_required_function_id_fkey" FOREIGN KEY ("required_function_id") REFERENCES "required_functions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treatment_menus" ADD CONSTRAINT "treatment_menus_learning_material_id_fkey" FOREIGN KEY ("learning_material_id") REFERENCES "learning_materials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

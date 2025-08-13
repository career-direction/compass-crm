-- CreateTable
CREATE TABLE "required_functions" (
    "id" BIGSERIAL NOT NULL,
    "curriculum_unit_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "overview_url" TEXT NOT NULL,
    "evaluation_criteria" TEXT NOT NULL,
    "evaluation_criteria_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "required_functions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "required_functions" ADD CONSTRAINT "required_functions_curriculum_unit_id_fkey" FOREIGN KEY ("curriculum_unit_id") REFERENCES "curriculum_units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

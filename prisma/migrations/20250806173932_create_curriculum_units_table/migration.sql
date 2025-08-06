-- CreateTable
CREATE TABLE "curriculum_units" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "overview_url" TEXT NOT NULL,
    "evaluation_criteria" TEXT NOT NULL,
    "evaluation_criteria_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "curriculum_units_pkey" PRIMARY KEY ("id")
);

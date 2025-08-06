-- CreateTable
CREATE TABLE "trainer_profiles" (
    "id" BIGSERIAL NOT NULL,
    "trainer_id" BIGINT NOT NULL,
    "motivation_statement" TEXT NOT NULL,
    "signature_muscle" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "certifications" TEXT NOT NULL,

    CONSTRAINT "trainer_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trainer_profiles_trainer_id_key" ON "trainer_profiles"("trainer_id");

-- AddForeignKey
ALTER TABLE "trainer_profiles" ADD CONSTRAINT "trainer_profiles_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "trainers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

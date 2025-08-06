-- CreateTable
CREATE TABLE "body_conditions" (
    "id" BIGSERIAL NOT NULL,
    "client_id" BIGINT NOT NULL,
    "measured_at" DATE NOT NULL,
    "weight" DOUBLE PRECISION,
    "body_fat" DOUBLE PRECISION,
    "muscle_mass" DOUBLE PRECISION,
    "skeletal_muscle_rate" DOUBLE PRECISION,
    "bmi" DOUBLE PRECISION,
    "bmr" DOUBLE PRECISION,
    "avg_sleep_time" DOUBLE PRECISION,
    "avg_respiration_rate" DOUBLE PRECISION,
    "sympathetic" DOUBLE PRECISION,
    "parasympathetic" DOUBLE PRECISION,
    "bust" DOUBLE PRECISION,
    "underbust" DOUBLE PRECISION,
    "waist" DOUBLE PRECISION,
    "hip" DOUBLE PRECISION,
    "arm_circumference" DOUBLE PRECISION,
    "buttock_height" DOUBLE PRECISION,
    "thigh_circumference" DOUBLE PRECISION,
    "calf_circumference" DOUBLE PRECISION,
    "ffd" DOUBLE PRECISION,
    "hwd" DOUBLE PRECISION,
    "memo" TEXT,

    CONSTRAINT "body_conditions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "body_conditions" ADD CONSTRAINT "body_conditions_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

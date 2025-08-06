-- CreateTable
CREATE TABLE "midterm_health_purposes" (
    "id" BIGSERIAL NOT NULL,
    "key" UUID NOT NULL DEFAULT gen_random_uuid(),
    "client_id" BIGINT NOT NULL,
    "purpose" TEXT NOT NULL,
    "months" INTEGER NOT NULL,
    "setting_date" TIMESTAMP(3) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "memo" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "midterm_health_purposes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "midterm_health_purposes_key_key" ON "midterm_health_purposes"("key");

-- AddForeignKey
ALTER TABLE "midterm_health_purposes" ADD CONSTRAINT "midterm_health_purposes_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

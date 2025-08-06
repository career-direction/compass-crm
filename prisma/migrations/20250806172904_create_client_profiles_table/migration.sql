-- CreateTable
CREATE TABLE "client_profiles" (
    "id" BIGSERIAL NOT NULL,
    "client_id" BIGINT NOT NULL,
    "occupation" TEXT NOT NULL,
    "hobby" TEXT NOT NULL,
    "allow_sns_post" TEXT NOT NULL,
    "exercise_history" TEXT NOT NULL,

    CONSTRAINT "client_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_profiles_client_id_key" ON "client_profiles"("client_id");

-- AddForeignKey
ALTER TABLE "client_profiles" ADD CONSTRAINT "client_profiles_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "user_credentials" (
    "id" BIGSERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password_digest" TEXT NOT NULL,
    "reset_at" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_credentials_user_id_key" ON "user_credentials"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_credentials_email_key" ON "user_credentials"("email");

-- AddForeignKey
ALTER TABLE "user_credentials" ADD CONSTRAINT "user_credentials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("key") ON DELETE RESTRICT ON UPDATE CASCADE;

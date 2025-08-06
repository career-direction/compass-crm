-- CreateTable
CREATE TABLE "pt_sessions" (
    "id" BIGSERIAL NOT NULL,
    "client_id" BIGINT NOT NULL,
    "trainer_id" BIGINT NOT NULL,
    "key" UUID NOT NULL DEFAULT gen_random_uuid(),
    "performed_at" TIMESTAMP(3) NOT NULL,
    "kind" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "archive_url" TEXT,
    "trainer_comment" TEXT,
    "memo" TEXT,
    "chat_contents" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pt_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pt_sessions_key_key" ON "pt_sessions"("key");

-- AddForeignKey
ALTER TABLE "pt_sessions" ADD CONSTRAINT "pt_sessions_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pt_sessions" ADD CONSTRAINT "pt_sessions_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "trainers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

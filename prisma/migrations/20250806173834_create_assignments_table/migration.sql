-- CreateTable
CREATE TABLE "assignments" (
    "id" BIGSERIAL NOT NULL,
    "key" UUID NOT NULL DEFAULT gen_random_uuid(),
    "pt_session_id" BIGINT NOT NULL,
    "due_date" DATE NOT NULL,
    "task_type" TEXT NOT NULL,
    "task_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assignments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "assignments_key_key" ON "assignments"("key");

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_pt_session_id_fkey" FOREIGN KEY ("pt_session_id") REFERENCES "pt_sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

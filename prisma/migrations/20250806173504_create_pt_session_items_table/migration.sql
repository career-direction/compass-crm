-- CreateTable
CREATE TABLE "pt_session_items" (
    "id" BIGSERIAL NOT NULL,
    "pt_session_id" BIGINT NOT NULL,
    "task_id" BIGINT NOT NULL,
    "task_type" TEXT NOT NULL,
    "trainer_advice" TEXT,
    "memo" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pt_session_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pt_session_items" ADD CONSTRAINT "pt_session_items_pt_session_id_fkey" FOREIGN KEY ("pt_session_id") REFERENCES "pt_sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

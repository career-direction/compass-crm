-- CreateTable
CREATE TABLE "learning_materials" (
    "id" BIGSERIAL NOT NULL,
    "owner_id" UUID NOT NULL,
    "key" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "source_url" TEXT NOT NULL,
    "content_type" TEXT NOT NULL,
    "content_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "learning_materials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "learning_materials_key_key" ON "learning_materials"("key");

-- AddForeignKey
ALTER TABLE "learning_materials" ADD CONSTRAINT "learning_materials_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("key") ON DELETE RESTRICT ON UPDATE CASCADE;

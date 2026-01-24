-- 1. まず NULL 許可でカラムを追加
ALTER TABLE "users" ADD COLUMN "middle_name" varchar;

-- 2. 既存行にデフォルト値を設定
UPDATE "users" SET "middle_name" = '' WHERE "middle_name" IS NULL;

-- 3. NOT NULL 制約とデフォルト値を設定
ALTER TABLE "users" ALTER COLUMN "middle_name" SET NOT NULL;
ALTER TABLE "users" ALTER COLUMN "middle_name" SET DEFAULT '';
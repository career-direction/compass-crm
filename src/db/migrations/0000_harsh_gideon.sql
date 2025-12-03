CREATE TABLE IF NOT EXISTS "assignments" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"key" uuid DEFAULT gen_random_uuid() NOT NULL,
	"pt_session_id" bigint NOT NULL,
	"due_date" date NOT NULL,
	"task_type" varchar NOT NULL,
	"task_id" bigint NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "assignments_key_unique" UNIQUE("key")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "body_conditions" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"client_id" bigint NOT NULL,
	"measured_at" date NOT NULL,
	"weight" text,
	"body_fat" text,
	"muscle_mass" text,
	"skeletal_muscle_rate" text,
	"bmi" text,
	"bmr" text,
	"avg_sleep_time" text,
	"avg_respiration_rate" text,
	"sympathetic" text,
	"parasympathetic" text,
	"bust" text,
	"underbust" text,
	"waist" text,
	"hip" text,
	"arm_circumference" text,
	"buttock_height" text,
	"thigh_circumference" text,
	"calf_circumference" text,
	"ffd" text,
	"hwd" text,
	"memo" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "client_profiles" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"client_id" bigint NOT NULL,
	"occupation" varchar NOT NULL,
	"hobby" varchar NOT NULL,
	"allow_sns_post" varchar NOT NULL,
	"exercise_history" varchar NOT NULL,
	CONSTRAINT "client_profiles_client_id_unique" UNIQUE("client_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "clients" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" bigint NOT NULL,
	CONSTRAINT "clients_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "curriculum_units" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"type" varchar NOT NULL,
	"overview" text NOT NULL,
	"overview_url" varchar NOT NULL,
	"evaluation_criteria" text NOT NULL,
	"evaluation_criteria_url" varchar NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "learning_materials" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"owner_id" uuid NOT NULL,
	"key" uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"status" varchar NOT NULL,
	"source_url" varchar NOT NULL,
	"content_type" varchar NOT NULL,
	"content_id" bigint NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "learning_materials_key_unique" UNIQUE("key")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "midterm_health_purposes" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"key" uuid DEFAULT gen_random_uuid() NOT NULL,
	"client_id" bigint NOT NULL,
	"purpose" varchar NOT NULL,
	"months" integer NOT NULL,
	"setting_date" timestamp with time zone NOT NULL,
	"start_date" timestamp with time zone NOT NULL,
	"memo" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "midterm_health_purposes_key_unique" UNIQUE("key")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pt_session_items" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"pt_session_id" bigint NOT NULL,
	"task_id" bigint NOT NULL,
	"task_type" varchar NOT NULL,
	"trainer_advice" text,
	"memo" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pt_sessions" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"client_id" bigint NOT NULL,
	"trainer_id" bigint NOT NULL,
	"key" uuid DEFAULT gen_random_uuid() NOT NULL,
	"performed_at" timestamp with time zone NOT NULL,
	"kind" varchar NOT NULL,
	"theme" varchar NOT NULL,
	"archive_url" varchar,
	"trainer_comment" varchar,
	"memo" text,
	"chat_contents" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "pt_sessions_key_unique" UNIQUE("key")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "required_functions" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"curriculum_unit_id" bigint NOT NULL,
	"name" varchar NOT NULL,
	"overview" text NOT NULL,
	"overview_url" varchar NOT NULL,
	"evaluation_criteria" text NOT NULL,
	"evaluation_criteria_url" varchar NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trainer_profiles" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"trainer_id" bigint NOT NULL,
	"motivation_statement" varchar NOT NULL,
	"signature_muscle" varchar NOT NULL,
	"specialization" varchar NOT NULL,
	"certifications" varchar NOT NULL,
	CONSTRAINT "trainer_profiles_trainer_id_unique" UNIQUE("trainer_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trainers" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" bigint NOT NULL,
	CONSTRAINT "trainers_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "training_menus" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"required_function_id" bigint NOT NULL,
	"learning_material_id" bigint NOT NULL,
	"tips" text NOT NULL,
	"common_errors" text[] NOT NULL,
	"target_muscles" text[] NOT NULL,
	"level" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "treatment_menus" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"required_function_id" bigint NOT NULL,
	"learning_material_id" bigint NOT NULL,
	"tips" text NOT NULL,
	"common_errors" text[] NOT NULL,
	"target_muscles" text[] NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_credentials" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"email" varchar NOT NULL,
	"password_digest" varchar NOT NULL,
	"reset_at" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "user_credentials_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "user_credentials_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"key" uuid DEFAULT gen_random_uuid() NOT NULL,
	"kind" integer NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"first_name_kana" varchar NOT NULL,
	"last_name_kana" varchar NOT NULL,
	"birth_date" date NOT NULL,
	"gender" integer NOT NULL,
	"active_flag" boolean DEFAULT true NOT NULL,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_key_unique" UNIQUE("key")
);

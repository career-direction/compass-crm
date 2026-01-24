import { sql } from "drizzle-orm";
import {
	bigint,
	bigserial,
	boolean,
	date,
	integer,
	pgTable,
	text,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	key: uuid("key").unique().default(sql`gen_random_uuid()`).notNull(),
	kind: integer("kind").notNull(), // 0: 管理者, 1: トレーナー, 2: クライアント
	firstName: varchar("first_name").notNull(),
	lastName: varchar("last_name").notNull(),
	firstNameKana: varchar("first_name_kana").notNull(),
	lastNameKana: varchar("last_name_kana").notNull(),
	birthDate: date("birth_date").notNull(),
	gender: integer("gender").notNull(), // 0: 女性, 1: 男性, 2: その他
	activeFlag: boolean("active_flag").default(true).notNull(),
	deletedAt: timestamp("deleted_at", { withTimezone: true }),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

export const userCredentials = pgTable("user_credentials", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	userId: uuid("user_id").unique().notNull(),
	email: varchar("email").unique().notNull(),
	passwordDigest: varchar("password_digest").notNull(),
	resetAt: boolean("reset_at").default(false).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

export const clients = pgTable("clients", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	userId: bigint("user_id", { mode: "number" }).unique().notNull(),
});

export const clientProfiles = pgTable("client_profiles", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	clientId: bigint("client_id", { mode: "number" }).unique().notNull(),
	occupation: varchar("occupation").notNull(),
	hobby: varchar("hobby").notNull(),
	allowSnsPost: varchar("allow_sns_post").notNull(),
	exerciseHistory: varchar("exercise_history").notNull(),
});

export const trainers = pgTable("trainers", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	userId: bigint("user_id", { mode: "number" }).unique().notNull(),
});

export const trainerProfiles = pgTable("trainer_profiles", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	trainerId: bigint("trainer_id", { mode: "number" }).unique().notNull(),
	motivationStatement: varchar("motivation_statement").notNull(),
	signatureMuscle: varchar("signature_muscle").notNull(),
	specialization: varchar("specialization").notNull(),
	certifications: varchar("certifications").notNull(),
});

export const ptSessions = pgTable("pt_sessions", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	clientId: bigint("client_id", { mode: "number" }).notNull(),
	trainerId: bigint("trainer_id", { mode: "number" }).notNull(),
	key: uuid("key").unique().default(sql`gen_random_uuid()`).notNull(),
	performedAt: timestamp("performed_at", { withTimezone: true }).notNull(),
	kind: varchar("kind").notNull(),
	theme: varchar("theme").notNull(),
	archiveUrl: varchar("archive_url"),
	trainerComment: varchar("trainer_comment"),
	memo: text("memo"),
	chatContents: text("chat_contents"),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

export const ptSessionItems = pgTable("pt_session_items", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	ptSessionId: bigint("pt_session_id", { mode: "number" }).notNull(),
	taskId: bigint("task_id", { mode: "number" }).notNull(),
	taskType: varchar("task_type").notNull(),
	trainerAdvice: text("trainer_advice"),
	memo: text("memo"),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

export const bodyConditions = pgTable("body_conditions", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	clientId: bigint("client_id", { mode: "number" }).notNull(),
	measuredAt: date("measured_at").notNull(),
	weight: text("weight"), // Float扱いだがDrizzleではnumberかtext。必要に応じnumeric/real等に変更。
	bodyFat: text("body_fat"),
	muscleMass: text("muscle_mass"),
	skeletalMuscleRate: text("skeletal_muscle_rate"),
	bmi: text("bmi"),
	bmr: text("bmr"),
	avgSleepTime: text("avg_sleep_time"),
	avgRespirationRate: text("avg_respiration_rate"),
	sympathetic: text("sympathetic"),
	parasympathetic: text("parasympathetic"),
	bust: text("bust"),
	underbust: text("underbust"),
	waist: text("waist"),
	hip: text("hip"),
	armCircumference: text("arm_circumference"),
	buttockHeight: text("buttock_height"),
	thighCircumference: text("thigh_circumference"),
	calfCircumference: text("calf_circumference"),
	ffd: text("ffd"),
	hwd: text("hwd"),
	memo: text("memo"),
});

export const midtermHealthPurposes = pgTable("midterm_health_purposes", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	key: uuid("key").unique().default(sql`gen_random_uuid()`).notNull(),
	clientId: bigint("client_id", { mode: "number" }).notNull(),
	purpose: varchar("purpose").notNull(),
	months: integer("months").notNull(),
	settingDate: timestamp("setting_date", { withTimezone: true }).notNull(),
	startDate: timestamp("start_date", { withTimezone: true }).notNull(),
	memo: text("memo"),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

export const assignments = pgTable("assignments", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	key: uuid("key").unique().default(sql`gen_random_uuid()`).notNull(),
	ptSessionId: bigint("pt_session_id", { mode: "number" }).notNull(),
	dueDate: date("due_date").notNull(),
	taskType: varchar("task_type").notNull(),
	taskId: bigint("task_id", { mode: "number" }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

export const learningMaterials = pgTable("learning_materials", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	ownerId: uuid("owner_id").notNull(),
	key: uuid("key").unique().default(sql`gen_random_uuid()`).notNull(),
	name: varchar("name").notNull(),
	status: varchar("status").notNull(),
	sourceUrl: varchar("source_url").notNull(),
	contentType: varchar("content_type").notNull(),
	contentId: bigint("content_id", { mode: "number" }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

export const curriculumUnits = pgTable("curriculum_units", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	name: varchar("name").notNull(),
	type: varchar("type").notNull(),
	overview: text("overview").notNull(),
	overviewUrl: varchar("overview_url").notNull(),
	evaluationCriteria: text("evaluation_criteria").notNull(),
	evaluationCriteriaUrl: varchar("evaluation_criteria_url").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

export const requiredFunctions = pgTable("required_functions", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	curriculumUnitId: bigint("curriculum_unit_id", { mode: "number" }).notNull(),
	name: varchar("name").notNull(),
	overview: text("overview").notNull(),
	overviewUrl: varchar("overview_url").notNull(),
	evaluationCriteria: text("evaluation_criteria").notNull(),
	evaluationCriteriaUrl: varchar("evaluation_criteria_url").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

export const treatmentMenus = pgTable("treatment_menus", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	name: varchar("name").notNull(),
	requiredFunctionId: bigint("required_function_id", {
		mode: "number",
	}).notNull(),
	learningMaterialId: bigint("learning_material_id", {
		mode: "number",
	}).notNull(),
	tips: text("tips").notNull(),
	commonErrors: text("common_errors").array().notNull(),
	targetMuscles: text("target_muscles").array().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

export const trainingMenus = pgTable("training_menus", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	name: varchar("name").notNull(),
	requiredFunctionId: bigint("required_function_id", {
		mode: "number",
	}).notNull(),
	learningMaterialId: bigint("learning_material_id", {
		mode: "number",
	}).notNull(),
	tips: text("tips").notNull(),
	commonErrors: text("common_errors").array().notNull(),
	targetMuscles: text("target_muscles").array().notNull(),
	level: integer("level").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});

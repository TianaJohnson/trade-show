

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Show info intake
CREATE TABLE "show_intake" (
	"id" SERIAL PRIMARY KEY,
	"show" VARCHAR (200),
	"location" VARCHAR (100),
	"show_date" VARCHAR (50),
	"state" VARCHAR (20),
	"city" VARCHAR (30),
	"country" VARCHAR (40)
	);

-- builder intake
CREATE TABLE "builder_intake" (
	"id" SERIAL PRIMARY KEY,
	"show_id" INT REFERENCES "show_intake",
	"brand" VARCHAR (200),
	"first_name" VARCHAR (100),
	"last_name" VARCHAR (100)
	);

-- bike intake
-- incomplete and not built in the db yet
CREATE TABLE "bike_intake" (
	"id" SERIAL PRIMARY KEY,
	"builder_id" INT REFERENCES "builder_intake"("id"),
	"main_mat" VARCHAR (30),
	"bike_type" VARCHAR (100),
	"wheel_size" VARCHAR (20),
	"tire_size" VARCHAR (20),
	"axle_type" VARCHAR (30),
	"brake_type" VARCHAR (30),
	"drive_train" VARCHAR (30),
	"fork_mat" VARCHAR (30),
	"fork_build" VARCHAR (30),
	"notes" VARCHAR (400),
	"main_comp_brand" VARCHAR (200),
		);

		











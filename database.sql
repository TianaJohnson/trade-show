

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Show info intake
CREATE TABLE "initial_intake" (
	"id" SERIAL PRIMARY KEY,
	"show" VARCHAR (200),
	"location" VARCHAR (100),
	"show_date" VARCHAR (50),
	"state" VARCHAR (20),
	"city" VARCHAR (30),
	"country" VARCHAR (40)
	);











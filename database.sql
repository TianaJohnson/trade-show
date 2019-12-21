

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Builder and Show info intake
CREATE TABLE "initial_intake" (
	"id" SERIAL PRIMARY KEY,
	"show" VARCHAR (200),
	"location" VARCHAR (100),
	"show-date" VARCHAR (50),
	"first-name" VARCHAR (100),
	"last-name" VARCHAR (100),
	"state" VARCHAR (20),
	"city" VARCHAR (30),
	"country" VARCHAR (40),
	"brand" VARCHAR (200)
	);














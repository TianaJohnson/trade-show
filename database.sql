
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- bikeshow_database
-- builder identification table
CREATE TABLE "show_info" (
    "id" SERIAL PRIMARY KEY,
    "show_name" VARCHAR (200),
    "show_location" VARCHAR (200),
    "show_date" DATE NOT NULL,
    "builder_name" VARCHAR (100),
    "build_brand" VARCHAR (100),
    "builder_location" VARCHAR (100)
);




-- fork info table
CREATE TABLE "fork_build" (
    "id" SERIAL PRIMARY KEY,
    "fork_build" VARCHAR (200),
    "steel_build" INT REFERENCES "steel_fork_build"("id"),
    "notes_fm" VARCHAR
);
CREATE TABLE "steel_fork_build" (
    "id" SERIAL PRIMARY KEY,
    "put_together_how" VARCHAR (200),
    "notes_sfb" VARCHAR
);





-- Bike location placement refrence table
CREATE TABLE "placement"(
    "id" SERIAL PRIMARY KEY,
    "front" BOOLEAN,
    "rear" BOOLEAN,
    "both" BOOLEAN
);
CREATE TABLE "wheel_size" (
    "id" SERIAL PRIMARY KEY,
    "tires_size" VARCHAR (50),
    "notes_ws" VARCHAR (100),
    "location_w_id" INT REFERENCES "placement"("id")
);
CREATE TABLE "tire_size" (
    "id" SERIAL PRIMARY KEY,
    "size" VARCHAR (50),
    "notes" VARCHAR (100),
    "location_ts_id" INT REFERENCES "placement"("id")
);
CREATE TABLE "axle_type" (
    "id" SERIAL PRIMARY KEY,
    "axle" VARCHAR (100),
    "location_at_id" INT REFERENCES "placement"("id")
);

-- wheel/tires/axles file
CREATE TABLE "wheels_tires_axles_file"(
    "id" SERIAL PRIMARY KEY,
    "wheel_id" INT REFERENCES "wheel_size"("id"),
    "tire_id" INT REFERENCES "tire_size"("id"),
    "axle_id" INT REFERENCES "axle_type"("id")
);






--brand type, to be refrenced
CREATE TABLE "component_brand" (
    "id" SERIAL PRIMARY KEY,
    "paul" BOOLEAN,
    "sram" BOOLEAN,
    "shimano" BOOLEAN,
    "campy" BOOLEAN,
    "hayes" BOOLEAN,
    "hope" BOOLEAN,
    "trp" BOOLEAN,
    "promax" BOOLEAN,
    "cane_creek" BOOLEAN,
    "brooks" BOOLEAN,
    "ritchey" BOOLEAN,
    "thompson" BOOLEAN,
    "raceface" BOOLEAN,
    "velo_orange" BOOLEAN,
    "sr_suntour" BOOLEAN,
    "dt_swiss" BOOLEAN,
    "white_industries" BOOLEAN,
    "velocity" BOOLEAN,
    "phil_wood" BOOLEAN,
    "i9" BOOLEAN,
    "fsa" BOOLEAN,
    "other" VARCHAR (400)
);



-- brake type, refrences charectoristics and brand
CREATE TABLE "brake_type" (
    "id" SERIAL PRIMARY KEY,
    "brake" VARCHAR (200),
    "bt_brand_id" INT REFERENCES "component_brand" ("id"),
    "notes_bt" VARCHAR (100),
    "characteristic_id" INT REFERENCES "brake_characteristic" ("id"),
    "location_bt_id" INT REFERENCES "placement"("id")
);
-- brake charictoristics refrenced by brake type
CREATE TABLE "brake_characteristic"(
    "id" SERIAL PRIMARY KEY,
    "char" VARCHAR (100),
    "notes_bc" VARCHAR (100)
);



-- drive train table, refrences brand
CREATE TABLE "drive_train" (
    "id" SERIAL PRIMARY KEY,
    "dt_char" VARCHAR (200),
    "notes_dt" VARCHAR (100),
    "dt_brand_id" INT REFERENCES "component_brand" ("id")
);



CREATE TABLE "bike_file" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user"("id"),
    "builder_id" INT REFERENCES "show_info"("id"),
    "bike_type_id" VARCHAR (200),
    "p_material_used_id" VARCHAR (200),
    "s_material_used_id" VARCHAR (200),
    "p_frame_joining_id" VARCHAR (200),
    "s_frame_joining_id" VARCHAR (200),  
    "fork_id" INT REFERENCES "fork_build"("id"),
    "brake_id" INT REFERENCES "brake_type"("id"),
    "dt_id" INT REFERENCES "drive_train"("id"),
    "wta_id" INT REFERENCES "wheels_tires_axles_file"("id")
    );

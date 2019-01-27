-- Database: bb8

-- DROP DATABASE bb8;

CREATE DATABASE bb8
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE bb8
    IS 'Database for IBDP class. Built for keeping data about assignments. To be used by coordinator.';
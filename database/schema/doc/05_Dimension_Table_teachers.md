# tables.teachers

``` sql
CREATE TABLE public.teachers
(
    "teacherID" integer NOT NULL DEFAULT nextval('"teachers_teacherID_seq"'::regclass),
    "teacherName" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    title character varying(10) COLLATE pg_catalog."default",
    "isObsolete" boolean,
    "roleID" integer,
    "lastUpdate" time with time zone,
    CONSTRAINT teachers_pkey PRIMARY KEY ("teacherID"),
    CONSTRAINT "teachers_teacherName_key" UNIQUE ("teacherName")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.teachers
    OWNER to postgres;
COMMENT ON TABLE public.teachers
    IS 'Table to keep details about teachers.';

-- Trigger: teachers_hist

-- DROP TRIGGER teachers_hist ON public.teachers;

CREATE TRIGGER teachers_hist
    BEFORE INSERT OR UPDATE 
    ON public.teachers
    FOR EACH ROW
    EXECUTE PROCEDURE public.teachers_hist();

COMMENT ON TRIGGER teachers_hist ON public.teachers
    IS 'Immediately and automatically logs activity on "teachers" table to "teachers_history" table.';
```

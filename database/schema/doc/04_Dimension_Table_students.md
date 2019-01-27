# table.students

``` sql
CREATE TABLE public.students
(
    "studentID" integer NOT NULL DEFAULT nextval('"students_studentID_seq"'::regclass),
    "studentCode" character varying(5) COLLATE pg_catalog."default" NOT NULL,
    "studentName" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "DOB" date,
    "isObsolete" boolean,
    "lastUpdate" time with time zone,
    CONSTRAINT students_pkey PRIMARY KEY ("studentID"),
    CONSTRAINT "students_studentCode_key" UNIQUE ("studentCode"),
    CONSTRAINT "students_studentName_key" UNIQUE ("studentName")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.students
    OWNER to postgres;
COMMENT ON TABLE public.students
    IS 'Table that keeps details about students.';

-- Trigger: students_hist

-- DROP TRIGGER students_hist ON public.students;

CREATE TRIGGER students_hist
    AFTER INSERT OR UPDATE 
    ON public.students
    FOR EACH ROW
    EXECUTE PROCEDURE public.students_hist();
    ```

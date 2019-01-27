# table.subjects

``` sql
CREATE TABLE public.subjects
(
    "subjectID" integer NOT NULL DEFAULT nextval('"subjects_subjectID_seq"'::regclass),
    "subjectName" character varying(20) COLLATE pg_catalog."default" NOT NULL,
    "subjectDescription" text COLLATE pg_catalog."default",
    "groupID" integer NOT NULL,
    "isObsolete" boolean,
    "teacherID" integer,
    "lastUpdate" time with time zone,
    CONSTRAINT subjects_pkey PRIMARY KEY ("subjectID"),
    CONSTRAINT "subjects_subjectName_key" UNIQUE ("subjectName")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.subjects
    OWNER to postgres;
    ```

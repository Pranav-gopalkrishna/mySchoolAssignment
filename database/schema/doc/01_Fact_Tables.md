# table.assignments 

```sql
CREATE TABLE public.assignments
(
    "assignmentID" integer NOT NULL DEFAULT nextval('"assignments_assignmentID_seq"'::regclass),
    "assignmentName" character varying COLLATE pg_catalog."default" NOT NULL,
    "subjectID" integer NOT NULL,
    "teacherID" integer NOT NULL,
    "assignmentDate" date NOT NULL,
    "draftSubmissionDate" date NOT NULL,
    "finalSubmissionDate" date NOT NULL,
    "assignmentsStudentCount" smallint NOT NULL,
    "assignmentsReceived" integer NOT NULL,
    "assignmentsAccepted" integer NOT NULL,
    "isClosed" boolean,
    remarks text COLLATE pg_catalog."default",
    CONSTRAINT assignments_pkey PRIMARY KEY ("assignmentID"),
    CONSTRAINT "assignments_assignmentName_key" UNIQUE ("assignmentName")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.assignments
    OWNER to postgres;
    
```

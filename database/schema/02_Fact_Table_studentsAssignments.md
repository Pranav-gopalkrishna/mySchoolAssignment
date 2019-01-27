# table.studentsAssignments

``` sql
CREATE TABLE public."studentsAssignments"
(
    "assignmentID" integer NOT NULL DEFAULT nextval('"studentsAssignments_assignmentID_seq"'::regclass),
    "studentID" smallint NOT NULL,
    "draftSubmissionDate" date,
    "finalSubmissionDate" date NOT NULL,
    "digitalFileReference" character varying(100) COLLATE pg_catalog."default",
    "teachersNotes" character varying(1000) COLLATE pg_catalog."default",
    "teachersLastNoteDate" date,
    "studentsNotes" character varying(1000) COLLATE pg_catalog."default",
    "studentsLastNoteDate" date,
    "isClosed" boolean,
    CONSTRAINT "studentsAssignments_pkey" PRIMARY KEY ("assignmentID", "studentID"),
    CONSTRAINT "studentsAssignments_assignmentID_key" UNIQUE ("assignmentID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."studentsAssignments"
    OWNER to postgres;

-- Trigger: studentsAssignments_hist

-- DROP TRIGGER "studentsAssignments_hist" ON public."studentsAssignments";

CREATE TRIGGER "studentsAssignments_hist"
    BEFORE INSERT OR DELETE OR UPDATE 
    ON public."studentsAssignments"
    FOR EACH ROW
    EXECUTE PROCEDURE public."studentsAssignments_hist"();
   ```
   

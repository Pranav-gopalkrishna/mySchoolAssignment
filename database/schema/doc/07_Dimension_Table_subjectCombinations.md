# table.subjectCombinations

``` sql
CREATE TABLE public."subjectsCombinations"
(
    "combinationID" integer NOT NULL,
    "subjectID" integer NOT NULL,
    remarks text COLLATE pg_catalog."default",
    CONSTRAINT subjectscombinations_pkey PRIMARY KEY ("combinationID", "subjectID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."subjectsCombinations"
    OWNER to postgres;
COMMENT ON TABLE public."subjectsCombinations"
    IS 'Defines the subject combinations taken by a particular students / students.';
    ```

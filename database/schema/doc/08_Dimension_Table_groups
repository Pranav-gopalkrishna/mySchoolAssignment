# table.groups

``` sql
CREATE TABLE public.groups
(
    "groupID" smallint NOT NULL,
    "subjectID" smallint NOT NULL,
    "groupName" character varying COLLATE pg_catalog."default" NOT NULL,
    "groupDescription" character varying COLLATE pg_catalog."default",
    "isObsolete" boolean,
    CONSTRAINT groups_pkey PRIMARY KEY ("groupID", "subjectID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.groups
    OWNER to postgres;
    ```

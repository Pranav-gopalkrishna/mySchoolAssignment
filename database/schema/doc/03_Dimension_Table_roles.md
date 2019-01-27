# table.roles

``` sql
CREATE TABLE public.roles
(
    "roleID" integer NOT NULL DEFAULT nextval('"roles_roleID_seq"'::regclass),
    "roleName" character varying(30) COLLATE pg_catalog."default" NOT NULL,
    "roleDescription" character varying(100) COLLATE pg_catalog."default",
    "isStudent" boolean,
    "isObsolete" boolean,
    "lastUpdate" time with time zone,
    CONSTRAINT roles_pkey PRIMARY KEY ("roleID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.roles
    OWNER to postgres;
    
   ```

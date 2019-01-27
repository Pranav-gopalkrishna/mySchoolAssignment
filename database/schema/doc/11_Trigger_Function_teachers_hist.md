# trigger.teachers_hist

``` sql
CREATE FUNCTION public.teachers_hist()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF 
AS $BODY$

BEGIN
			IF (TG_OP = 'UPDATE' AND NEW."isObsolete" = TRUE AND (OLD."isObsolete" = FALSE OR OLD."isObsolete" = NULL)) THEN
						INSERT INTO public.teachers_history(
						"teacherID", "teacherName", "title", "roleID", "isObsolete","dateModified", "comments")
						VALUES (NEW."teacherID", NEW."teacherName" , NEW."title", NEW."roleID", NEW."isObsolete" , current_timestamp , current_user||' deleted record' );
						RETURN NEW;
			ELSIF (TG_OP = 'UPDATE') THEN
						INSERT INTO public.teachers_history(
						"teacherID", "teacherName", "title", "roleID", "isObsolete", "dateModified", "comments")
						VALUES (NEW."teacherID", NEW."teacherName" , NEW."title", NEW."roleID", NEW."isObsolete", current_timestamp , current_user||' updated record' );
						RETURN NEW;
			ELSIF (TG_OP = 'INSERT') THEN
						INSERT INTO public.teachers_history(
						"teacherID", "teacherName", "title", "roleID", "isObsolete","dateModified", "comments")
						VALUES (NEW."teacherID", NEW."teacherName" , NEW."title", NEW."roleID", NEW."isObsolete", current_timestamp , current_user||' added record' );
						RETURN NEW;	
			
 END IF;
 RETURN NULL;
 END;

$BODY$;

ALTER FUNCTION public.teachers_hist()
    OWNER TO postgres;
    ```

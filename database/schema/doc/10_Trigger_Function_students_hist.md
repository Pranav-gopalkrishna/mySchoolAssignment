# trigger.students_hist

``` sql
CREATE FUNCTION public.students_hist()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF 
AS $BODY$

BEGIN
	IF (TG_OP = 'UPDATE' AND NEW."isObsolete" = TRUE AND (OLD."isObsolete" = FALSE OR OLD."isObsolete" = NULL)) THEN
		INSERT INTO public.students_history(
		"studentID", "studentCode", "studentName", "DOB", "isObsolete", "dateModified", "recordComments")
		VALUES (NEW."studentID", NEW."studentCode", NEW."studentName", NEW."DOB",NEW."isObsolete", current_time , current_user||' deleted record' );
		RETURN NEW;
	ELSIF (TG_OP = 'UPDATE') THEN
		INSERT INTO public.students_history(
		"studentID", "studentCode", "studentName", "DOB", "isObsolete", "dateModified", "recordComments")
		VALUES (NEW."studentID", NEW."studentCode", NEW."studentName", NEW."DOB",NEW."isObsolete", current_time , current_user||' updated record' );
		RETURN NEW;
	ELSIF (TG_OP = 'INSERT') THEN
		INSERT INTO public.students_history(
		"studentID", "studentCode", "studentName", "DOB", "isObsolete", "dateModified", "recordComments")
		VALUES (NEW."studentID", NEW."studentCode", NEW."studentName", NEW."DOB",NEW."isObsolete", current_time , current_user||' added record' );
		RETURN NEW;
	END IF;
	RETURN NULL;
END

$BODY$;

ALTER FUNCTION public.students_hist()
    OWNER TO postgres;

COMMENT ON FUNCTION public.students_hist()
    IS 'To immediately and automatically log activity on "students" table to "students_history" table.';
    ```

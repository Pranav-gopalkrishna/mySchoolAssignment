# trigger.studentsAssignments_hist

``` sql
CREATE FUNCTION public."studentsAssignments_hist"()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF 
AS $BODY$

BEGIN
	IF (TG_OP = 'UPDATE' AND NEW."isClosed" = TRUE AND (OLD."isClosed" = FALSE OR OLD."isClosed" = NULL)) THEN
  INSERT INTO public."studentsAssignments_history"(
   "assignmentID", "studentID", "draftSubmissionDate", "finalSubmissionDate", "digitalFileReference", "teachersNotes", "teachersLastNoteDate", "isClosed", "dateModified", "recordComments")
   VALUES (NEW."assignmentID", NEW."studentID", NEW."draftSubmissionDate", NEW."finalSubmissionDate", NEW."digitalFileReference", NEW."teachersNotes", NEW."teachersLastNoteDate", NEW."isClosed", current_time, current_user||' deleted record');
		RETURN NEW;
	ELSIF (TG_OP = 'UPDATE') THEN
  INSERT INTO public."studentsAssignments_history"(
       "assignmentID", "studentID", "draftSubmissionDate", "finalSubmissionDate", "digitalFileReference", "teachersNotes", "teachersLastNoteDate", "isClosed", "dateModified", "recordComments")
       VALUES (NEW."assignmentID", NEW."studentID", NEW."draftSubmissionDate", NEW."finalSubmissionDate", NEW."digitalFileReference", NEW."teachersNotes", NEW."teachersLastNoteDate", NEW."isClosed", current_time, current_user||'  updated record');
	ELSIF (TG_OP = 'INSERT') THEN
  INSERT INTO public."studentsAssignments_history"(
       "assignmentID", "studentID", "draftSubmissionDate", "finalSubmissionDate", "digitalFileReference", "teachersNotes", "teachersLastNoteDate", "isClosed", "dateModified", "recordComments")
       VALUES (NEW."assignmentID", NEW."studentID", NEW."draftSubmissionDate", NEW."finalSubmissionDate", NEW."digitalFileReference", NEW."teachersNotes", NEW."teachersLastNoteDate", NEW."isClosed", current_time, current_user||' added record');
	END IF;
	RETURN NULL;
END

$BODY$;

ALTER FUNCTION public."studentsAssignments_hist"()
    OWNER TO postgres;
    ```

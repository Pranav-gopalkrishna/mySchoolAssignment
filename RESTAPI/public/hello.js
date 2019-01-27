$(document).ready(function() {
    $.ajax({
        //url: "http://rest-service.guides.spring.io/greeting"
        url: "http://127.0.0.1:3000/api/teachers"
    }).then(function(data) {
       $('.greeting-id').append(data.data.teacherID);
       $('.greeting-content').append(data.data.teacherName);
    });
});

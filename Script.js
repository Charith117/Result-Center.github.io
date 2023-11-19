
function populateCourses() {
    var userTypeSelect = document.getElementById("Faculty");
    var courseSelect = document.getElementById("course");

    // Clear existing options
    courseSelect.innerHTML = "<option value=''>Select Course</option>";

    if (userTypeSelect.value === "Faculty of Technological Studies") {
        // Populate courses for students
        var studentCourses = ["Information and Communication Technology"];
        for (var i = 0; i < studentCourses.length; i++) {
            var option = document.createElement("option");
            option.value = studentCourses[i];
            option.text = studentCourses[i];
            courseSelect.add(option);
        }
    }
    else if (userTypeSelect.value === "Faculty of Business Studies") {
        // Populate courses for faculty
        var facultyCourses = ["Accounting and Finance", "Project Management", "Banking and Insurance","Human Resource Management", "Business Economics", "Marketing Management"];
        for (var j = 0; j < facultyCourses.length; j++) {
            var optionFaculty = document.createElement("option");
            optionFaculty.value = facultyCourses[j];
            optionFaculty.text = facultyCourses[j];
            courseSelect.add(optionFaculty);
        }
    }
    
    else if  (userTypeSelect.value === "Faculty of Applied Science") {
        // Populate courses for faculty
        var facultyCourses = ["Applied Mathematics and Computing", "Computer Science", "Environmental Science","Information Technology"];
        for (var j = 0; j < facultyCourses.length; j++) {
            var optionFaculty = document.createElement("option");
            optionFaculty.value = facultyCourses[j];
            optionFaculty.text = facultyCourses[j];
            courseSelect.add(optionFaculty);
        }
    }
    // Add more conditions for other user types if needed
}

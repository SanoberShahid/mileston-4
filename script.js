// get references to the form and display area
var forms = document.getElementById('resume-form');
var ResumeDisplayElement = document.getElementById('resume-display');
// handle form submission
forms.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p> \n    <p><b>Name:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n\n    <h3>Education</h3>\n    <p <span contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p <span contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p <span contenteditable=\"true\">").concat(skills, "</p>");
    // display the generated resume
    if (ResumeDisplayElement) {
        ResumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing.');
    }
});

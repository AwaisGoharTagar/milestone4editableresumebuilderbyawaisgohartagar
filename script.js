// Function to handle form submission
function handleFormSubmit(event) {
    var _a;
    event.preventDefault();
    // Get form elements
    var nameElement = document.getElementById('name');
    var fathernameElement = document.getElementById('fatherName');
    var cnicElement = document.getElementById('C.N.I.C');
    var addressElement = document.getElementById('add');
    var phoneElement = document.getElementById('phone');
    var emailElement = document.getElementById('email');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var profilePictureInput = document.getElementById('profilePicture');
    // Check if elements are not null
    if (nameElement &&
        fathernameElement &&
        cnicElement &&
        addressElement &&
        phoneElement &&
        emailElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        // Get values from form elements
        var name_1 = nameElement.value;
        var fathername = fathernameElement.value;
        var cnic = cnicElement.value;
        var address = addressElement.value;
        var phone = phoneElement.value;
        var email = emailElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Picture Elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Generate the resume content
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        \n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n            <p><strong>Father Name:</strong> <span id=\"edit-fathername\" class=\"editable\"> ").concat(fathername, " </span> </p>\n            <p><strong>C.N.I.C:</strong> <span id=\"edit-cnic\" class=\"editable\"> ").concat(cnic, " </span> </p>\n            <p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span> </p>\n            <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n            \n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n        \n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n        \n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        ");
        // Update the resume output element
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output element is missing");
        }
    }
}
// Function to handle toggling between Edit and Save modes
function toggleEditMode() {
    var editButton = document.getElementById("editButton");
    if (!editButton)
        return;
    var editableElements = document.querySelectorAll(".editable");
    if (editButton.textContent === "Edit") {
        // Switch to edit mode
        editableElements.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "true";
                element.classList.add("editing");
            }
        });
        editButton.textContent = "Save";
    }
    else {
        // Switch to save mode
        editableElements.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "false";
                element.classList.remove("editing");
            }
        });
        editButton.textContent = "Edit";
    }
}
// Attach event listeners only once
function attachEventListeners() {
    var formElement = document.getElementById("resumeForm");
    var editButton = document.getElementById("editButton");
    if (formElement) {
        formElement.addEventListener("submit", handleFormSubmit);
    }
    if (editButton) {
        editButton.addEventListener("click", toggleEditMode);
    }
}
// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    attachEventListeners();
});

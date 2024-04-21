function showotp() {
    event.preventDefault();
    document.querySelector('.formBody').style.display = 'none';
    document.querySelector('.otp').style.display = 'block';
}

function validateForm() {
    var firstName = document.querySelector(".firstName").value;
    var email = document.querySelector(".email").value;
    var mobile = document.querySelector(".mobile").value;
    var course = document.querySelector(".course").value;
    var tc = document.querySelector(".tc").checked;


    const nameError = document.getElementById("name-error");
    const addressError = document.getElementById("address-error");
    const mobileError = document.getElementById("mobile-error");
    const emailError = document.getElementById("email-error");
    const courseError = document.getElementById("course-error");
    const agreeError = document.getElementById("agree-error");

    nameError.textContent = "";
    addressError.textContent = "";
    mobileError.textContent = "";
    emailError.textContent = "";
    courseError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (firstName.length < 2 || !/^[a-zA-Z]+$/ == firstName) {
        nameError.textContent = "Please Enter your name properly.";
        isValid = false;
    }

    if (course == 'Select Course') {
        courseError.textContent = "Please select a course.";
        isValid = false;
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ == email) {
        emailError.textContent = "Please Enter valid email.";
        isValid = false;
    }

    if (!/^\d{10}$/ == mobile) {
        mobileError.textContent = "Please Enter valid mobile number.";
        isValid = false;
    }

    if (!tc) {
        agreeError.textContent = "Please agree to the terms and conditions.";
        isValid = false;
    }

    return isValid;
}

function checkOTP() {
    const otp = document.querySelector('#otp').value;
    if (otp.length == 6) {
        return true;
    }

    return false;
}

function showConfirmation() {
    if (checkOTP()) {
        event.preventDefault();
        document.querySelector('.otp').style.display = 'none';
        document.querySelector('.confirmation').style.display = 'block';
    } else {
        const otpError = document.getElementById('otp-error');
        otpError.textContent = "OTP should be 6 digits long.";
        event.preventDefault();
    }
}
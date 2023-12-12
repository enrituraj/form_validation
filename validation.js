const form = document.getElementById("registrationForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const mobile_no = document.getElementById("mobile_no");
const password = document.getElementById("password");

var validation_flag = true;


function setMsg(input, msg, type) {

    const msg_box = (input.previousSibling).previousSibling;

    if (type == 'error') {
        msg_box.textContent = msg
        msg_box.classList?.remove("success")
        msg_box.classList.add("error")
    } else {
        msg_box.textContent = msg
        msg_box.classList.remove("error")
        msg_box.classList.add("success")
    }
}

function validateFullName(fullName, e) {
    const trimmedName = e.target.value.trim();  
    if (trimmedName === "") {
      setMsg(fullName, "Name cannot be empty.", "error");
      return;
    }else if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      setMsg(fullName, "Only letters (a-z, A-Z)", "error");
      return;
    } else{
        setMsg(fullName, "Valid Fullname", "success");
    }  
}

fullname.addEventListener("input", (e) => {
    validateFullName(fullname, e);
})

function validateEmail(email, e) {
    const trimmedEmail = e.target.value.trim();
    if (trimmedEmail === "") setMsg(email, "Email cannot be empty.", "error");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) setMsg(email, "Invalid email", "error");
    else setMsg(email, "Valid Email", "success");
}

email.addEventListener("input", (e) => {
    validateEmail(email, e)
})

function validateMobile_no(mobile_no, e) {
    const trimmedMobile_no = e.target.value.trim();
    if (trimmedMobile_no === "") setMsg(mobile_no, "Mobile no cannot be empty.", "error");
    else if (!/^\d{10}$/.test(trimmedMobile_no)) setMsg(mobile_no, "Please enter a valid 10-digit mobile number", "error");
    else setMsg(mobile_no, "Valid mobile number", "success");
}

mobile_no.addEventListener("input", (e) => {
    validateMobile_no(mobile_no, e)
})

function validatePassword(password, e) {
    const trimmedPassword = e.target.value.trim();
    const isLengthValid = trimmedPassword.length >= 8 && trimmedPassword.length <= 20;

    if (trimmedPassword === "") setMsg(password, "Password cannot be empty.", "error");
    else if (!/[a-z]/.test(trimmedPassword)) {
        setMsg(password, "including at least one lowercase letter.", "error");
    }
    else if (!/[A-Z]/.test(trimmedPassword)) {
        setMsg(password, "including at least one uppercase letter.", "error");
    }
    else if (!/[!@#$%^&*()_+]/.test(trimmedPassword)) {
        setMsg(password, "including at least one symbol letter.", "error");
    }
    else if (!/\d/.test(trimmedPassword)) {
        setMsg(password, "including at least one number letter.", "error");
    }
    else if (!isLengthValid) {
        setMsg(password, "min 8 max 20.", "error");
    } else {
        setMsg(password, "Valid password", "success");
    }
}

password.addEventListener("input", (e) => {
   validatePassword(password,e)
})



form.addEventListener("submit", function (e) {   
      e.preventDefault();
});

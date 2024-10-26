// Navigation from Login to Registration
function navigateToRegistration() {
  window.location.href = "register.html";
}

// Select User Type (Manager or Employee)
let selectedUserType = "";

function setUserType(userType) {
  selectedUserType = userType;
  document
    .querySelectorAll(".user-type")
    .forEach((button) => button.classList.remove("selected"));
  document
    .querySelector(`.user-type[onclick="setUserType('${userType}')"]`)
    .classList.add("selected");
}

// Handle Login Form Submission
document
  .getElementById("loginForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demo

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulate login validation (replace with actual backend request)
    if (email && password) {
      alert(`Logged in as ${email}`);
      navigateToRegistration();
    } else {
      alert("Please enter valid login credentials.");
    }
  });

// Handle Registration Form Submission
document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demo

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!selectedUserType) {
      alert("Please select a user type (Manager or Employee).");
      return;
    }

    const registrationData = {
      name,
      email,
      password,
      userType: selectedUserType,
    };

    // Display or store registration data (replace with backend request as needed)
    console.log("Registration data:", registrationData);
    alert(`Successfully registered as ${selectedUserType}. Welcome, ${name}!`);

    // Redirect after registration success
    // Example: window.location.href = 'welcome.html';
  });

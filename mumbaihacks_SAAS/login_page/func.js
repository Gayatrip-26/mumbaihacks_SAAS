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

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!selectedUserType) {
      alert("Please select a user type (Manager or Employee).");
      return;
    }

    const loginData = {
      email,
      password,
      userType: selectedUserType,
    };

    // Example output to the console; replace with an actual login request if needed
    console.log("Login data:", loginData);

    alert(`Logging in as ${selectedUserType}. Email: ${email}`);

    // Redirect or handle login success
    // Example: window.location.href = selectedUserType === 'manager' ? '/manager-dashboard' : '/employee-dashboard';
  });

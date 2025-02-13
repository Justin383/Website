// Get references to the input fields and form
const usernameField = document.getElementById('username');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const registrationForm = document.getElementById('registrationForm');

// Function to store form values
function storeFormValues() {
  const usernameStr = usernameField.value;
  const emailStr = emailField.value;
  const passwordStr = passwordField.value;
  const confirmPasswordStr = confirmPasswordField.value;

  // Log the values or store them as needed
  console.log("Username: " + usernameStr);
  console.log("Email: " + emailStr);
  console.log("Password: " + passwordStr);
  console.log("Confirm Password: " + confirmPasswordStr);

  // Optionally, return an object containing the values
  return {
    username: usernameStr,
    email: emailStr,
    password: passwordStr,
    confirmPassword: confirmPasswordStr
  };
}

// Event listener for form submission
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Call the function to store the form values when the submit button is pressed
  const storedValues = storeFormValues();

  // Further processing of storedValues can be done here
});
import { loginAdmin } from "./loginAdmin";
import { displayCourses, displayDrinks } from "./displayMenu";
import { registerAdmin } from "./registerAdmin";
import { displayCoursesAdmin } from "./updateMenu";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const userNameLoginEl = document.getElementById("userNameLogin");
  const passwordLoginEl = document.getElementById("passWordLogin");
  const errorMessageEl = document.getElementById("errMessageLog");

  const firstnameEl = document.getElementById("firstname");
  const lastnameEl = document.getElementById("lastname");
  const emailEl = document.getElementById("email");
  const usernameRegisterEl = document.getElementById("username");
  const passwordRegisterEl = document.getElementById("password");

  // Display menu if on menu page
  if (window.location.pathname.includes("menu")) {
    displayCourses();
    displayDrinks();
  }

  // If on login page
  if (window.location.pathname.includes("login")) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const username = userNameLoginEl.value;
      const password = passwordLoginEl.value;

      // Clear previous error messages
      errorMessageEl.textContent = "";

      try {
        await loginAdmin(username, password);
      } catch (error) {
        console.error("Error during login:", error);
      }
    });
  }

  // If on admin page
  if (window.location.pathname.includes("admin")) {
    displayCoursesAdmin();
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const firstname = firstnameEl.value;
      const lastname = lastnameEl.value;
      const email = emailEl.value;
      const username = usernameRegisterEl.value;
      const password = passwordRegisterEl.value;

      try {
        await registerAdmin(firstname, lastname, email, username, password);
        alert("Ny användare registrerad!");
      } catch (error) {
        console.error("Error registering user", error);
      }
    });
  }
});

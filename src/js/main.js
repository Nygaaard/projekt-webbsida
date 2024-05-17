import { loginAdmin } from "./loginAdmin";
import { displayCourses, displayDrinks } from "./displayMenu";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const userNameLoginEl = document.getElementById("userNameLogin");
  const passwordLoginEl = document.getElementById("passWordLogin");
  const errorMessageEl = document.getElementById("errMessageLog");

  //Display menu if on menu page
  if (window.location.pathname.includes("menu")) {
    displayCourses();
    displayDrinks();
  }

  //If on login page
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
});

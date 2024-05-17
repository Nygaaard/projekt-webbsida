import { loginAdmin } from "./loginAdmin";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const userNameLoginEl = document.getElementById("userNameLogin");
  const passwordLoginEl = document.getElementById("passWordLogin");
  const errorMessageEl = document.getElementById("errMessageLog");

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
});

// if (authorized) {
//   try {
//     const token = localStorage.getItem("token");
//     const userInfo = await getUserInfo(token);
//     loginUser(userInfo);
//   } catch (error) {
//     console.error("Could not find user information...");
//   }
// }

import { loginAdmin } from "./loginAdmin";
import { displayCourses, displayDrinks } from "./displayMenu";
import { registerAdmin } from "./registerAdmin";
import { displayCoursesAdmin, displayDrinksAdmin } from "./updateMenu";
import { addCourse, addDrink } from "./addMenu";
import { registerSubscriber } from "./registerSubscriber";

document.addEventListener("DOMContentLoaded", () => {
  //Variables
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

  const addCourseEl = document.getElementById("addCourse");
  const addCoursenameEl = document.getElementById("addCoursename");
  const addCourseDescriptionEl = document.getElementById(
    "addCourseDescription"
  );
  const addCoursePriceEl = document.getElementById("addCoursePrice");
  const addCourseCategoryEl = document.getElementById("addCourseCategory");

  const addDrinknameEl = document.getElementById("addDrinkname");
  const addDrinkDescriptionEl = document.getElementById("addDrinkDescription");
  const addDrinkPriceEl = document.getElementById("addDrinkPrice");
  const addDrinkEl = document.getElementById("addDrink");

  const firstnameSubEl = document.getElementById("firstnameSub");
  const lastnameSubEl = document.getElementById("lastnameSub");
  const emailSubEl = document.getElementById("emailSub");
  const addressSubEl = document.getElementById("addressSub");

  // Display menu if on menu page
  if (window.location.pathname.includes("menu")) {
    displayCourses();
    displayDrinks();
  }

  //If on index page
  if (
    window.location.pathname.includes("index") ||
    window.location.pathname.includes("")
  ) {
    const subscribeEl = document.getElementById("subscribe");

    subscribeEl.addEventListener("click", async function () {
      event.preventDefault();

      const firstname = firstnameSubEl.value;
      const lastname = lastnameSubEl.value;
      const email = emailSubEl.value;
      const address = addressSubEl.value;

      try {
        await registerSubscriber(firstname, lastname, email, address);
        window.location.href = process.env.INDEX;
      } catch (error) {
        console.log("Error during subscription...", error);
      }
    });
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
    displayDrinksAdmin();
    //Register new user on admin page
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const firstname = firstnameEl.value;
      const lastname = lastnameEl.value;
      const email = emailEl.value;
      const username = usernameRegisterEl.value;
      const password = passwordRegisterEl.value;

      try {
        await registerAdmin(firstname, lastname, email, username, password);
      } catch (error) {
        console.error("Error registering user", error);
      }
    });

    //Add new course on admin page
    addCourseEl.addEventListener("click", async function () {
      event.preventDefault();

      const coursename = addCoursenameEl.value;
      const description = addCourseDescriptionEl.value;
      const price = addCoursePriceEl.value;
      const category = addCourseCategoryEl.value;

      try {
        await addCourse(coursename, description, price, category);
        alert("Ny rätt tillagd!");
      } catch (error) {
        console.error("Error add new course");
      }
    });

    //Add new drink on admin page
    addDrinkEl.addEventListener("click", async function () {
      event.preventDefault();

      const drinkname = addDrinknameEl.value;
      const description = addDrinkDescriptionEl.value;
      const price = addDrinkPriceEl.value;

      try {
        await addDrink(drinkname, description, price);
        alert("Ny dryck tillagd!");
      } catch (error) {
        console.log("Error adding new drink");
      }
    });
  }
});

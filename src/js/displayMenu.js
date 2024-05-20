import { getCourses } from "./getData";
import { getDrinks } from "./getData";

//Display courses
export async function displayCourses() {
  const courses = await getCourses();

  const courseSectionEl = document.getElementById("courseSection");

  // Create and append course header
  const courseHeader = document.createElement("h2");
  courseHeader.textContent = "Matmeny";
  courseSectionEl.appendChild(courseHeader);

  // Display courses
  courses.menu.forEach((course) => {
    // Create course elements
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("menu-item");

    const courseName = document.createElement("h3");
    courseName.textContent = course.coursename;

    const description = document.createElement("p");
    description.textContent = course.description;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = course.price + " kr";

    // Append elements to course div
    courseDiv.appendChild(courseName);
    courseDiv.appendChild(description);
    courseDiv.appendChild(price);

    // Append course div to course section
    courseSectionEl.appendChild(courseDiv);
  });
}

//Display drinks
export async function displayDrinks() {
  const drinks = await getDrinks();

  const drinkSectionEl = document.getElementById("drinkSection");

  // Create and append drink header
  const drinkHeader = document.createElement("h2");
  drinkHeader.textContent = "Dryck";
  drinkSectionEl.appendChild(drinkHeader);

  // Display drinks
  drinks.menu.forEach((drink) => {
    // Create drink elements
    const drinkDiv = document.createElement("div");
    drinkDiv.classList.add("menu-item");

    const drinkName = document.createElement("h3");
    drinkName.textContent = drink.drinkname;

    const description = document.createElement("p");
    description.textContent = drink.description;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = drink.price + " kr";

    // Append elements to drink div
    drinkDiv.appendChild(drinkName);
    drinkDiv.appendChild(description);
    drinkDiv.appendChild(price);

    // Append drink div to drink section
    drinkSectionEl.appendChild(drinkDiv);
  });
}

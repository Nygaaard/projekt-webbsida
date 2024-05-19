import { getCourses } from "./getData";
import { getDrinks } from "./getData";

// Display courses
export async function displayCoursesAdmin() {
  const courses = await getCourses();

  const updateFormEl = document.getElementById("update-form");

  // Create and append course header
  const courseHeader = document.createElement("h2");
  courseHeader.textContent = "Rätter";
  updateFormEl.appendChild(courseHeader);

  // Display courses
  courses.menu.forEach((course, index) => {
    // Generate unique IDs for each input
    const coursenameId = `coursename-${index}`;
    const descriptionId = `description-${index}`;
    const priceId = `price-${index}`;
    const categoryId = `category-${index}`;

    // Coursename
    const coursenameLabel = document.createElement("label");
    coursenameLabel.setAttribute("for", coursenameId);
    coursenameLabel.textContent = `Maträtt: ${course.coursename}`;

    const coursenameInput = document.createElement("input");
    coursenameInput.setAttribute("type", "text");
    coursenameInput.setAttribute("id", coursenameId);
    coursenameInput.setAttribute("name", "coursenameAdmin");
    coursenameInput.value = course.coursename;

    // Description
    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", descriptionId);
    descriptionLabel.textContent = `Beskrivning: ${course.description}`;

    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", descriptionId);
    descriptionInput.setAttribute("name", "descriptionAdmin");
    descriptionInput.value = course.description;

    // Price
    const priceLabel = document.createElement("label");
    priceLabel.setAttribute("for", priceId);
    priceLabel.textContent = `Pris: ${course.price} kr`;

    const priceInput = document.createElement("input");
    priceInput.setAttribute("type", "text");
    priceInput.setAttribute("id", priceId);
    priceInput.setAttribute("name", "priceAdmin");
    priceInput.value = course.price;

    // Category
    const categoryLabel = document.createElement("label");
    categoryLabel.setAttribute("for", categoryId);
    categoryLabel.textContent = `Kategori:`;

    const categoryInput = document.createElement("input");
    categoryInput.setAttribute("type", "text");
    categoryInput.setAttribute("id", categoryId);
    categoryInput.setAttribute("name", "categoryAdmin");
    categoryInput.value = course.category;

    // Submit
    const updateCourseSubmitEl = document.createElement("input");
    updateCourseSubmitEl.setAttribute("type", "submit");
    updateCourseSubmitEl.setAttribute("id", `update-course-${index}`);
    updateCourseSubmitEl.value = "Uppdatera";
    updateCourseSubmitEl.onclick = function () {
      event.preventDefault();
      updateCourse(index, course.id);
    };

    // Append elements to update form
    updateFormEl.appendChild(coursenameLabel);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(coursenameInput);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(descriptionLabel);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(descriptionInput);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(priceLabel);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(priceInput);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(categoryLabel);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(categoryInput);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(updateCourseSubmitEl);
    updateFormEl.appendChild(document.createElement("br"));
  });
}

//Display drinks
// export async function displayAdmin() {
//   const drinks = await getDrinks();

//   const drinkSectionEl = document.getElementById("drinkSection");

//   // Create and append drink header
//   const drinkHeader = document.createElement("h2");
//   drinkHeader.textContent = "Dryck";
//   drinkSectionEl.appendChild(drinkHeader);

//   // Display drinks
//   drinks.menu.forEach((drink) => {
//     // Create drink elements
//     const drinkDiv = document.createElement("div");
//     drinkDiv.classList.add("menu-item");

//     const drinkName = document.createElement("h3");
//     drinkName.textContent = drink.drinkname;

//     const description = document.createElement("p");
//     description.textContent = drink.description;

//     const price = document.createElement("span");
//     price.classList.add("price");
//     price.textContent = drink.price + " kr";

//     // Append elements to drink div
//     drinkDiv.appendChild(drinkName);
//     drinkDiv.appendChild(description);
//     drinkDiv.appendChild(price);

//     // Append drink div to drink section
//     drinkSectionEl.appendChild(drinkDiv);
//   });
// }

async function updateCourse(index, id) {
  const url = `http://localhost:3000/api/courses/${id}`;

  const coursename = document.getElementById(`coursename-${index}`).value;
  const description = document.getElementById(`description-${index}`).value;
  const price = document.getElementById(`price-${index}`).value;
  const category = document.getElementById(`category-${index}`).value;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ coursename, description, price, category }),
  });

  console.log(response);
}

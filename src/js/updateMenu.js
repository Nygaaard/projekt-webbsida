import { getCourses } from "./getData";
import { getDrinks } from "./getData";

const apiUrl = process.env.API_URL;
const token = localStorage.getItem("token");

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

    const categoryInput = document.createElement("select");
    categoryInput.setAttribute("id", categoryId);
    categoryInput.setAttribute("name", "categoryAdmin");

    const categoryOptions = [
      { title: "Kött", value: "meat" },
      { title: "Fisk", value: "fish" },
      { title: "Vegetariskt", value: "vegetarian" },
      { title: "Veganskt", value: "vegan" },
    ];

    categoryOptions.forEach((category) => {
      const option = document.createElement("option");

      option.textContent = category.title;
      option.value = category.value;

      categoryInput.appendChild(option);
    });

    categoryInput.value = course.category;

    // Submit
    const updateCourseSubmitEl = document.createElement("input");
    updateCourseSubmitEl.setAttribute("type", "submit");
    updateCourseSubmitEl.setAttribute("id", `update-course-${index}`);
    updateCourseSubmitEl.value = "Uppdatera";
    //Onclick for update button
    updateCourseSubmitEl.onclick = function () {
      event.preventDefault();
      updateCourse(index, course.id);
    };

    //Delete
    const deleteCourseSubmitEl = document.createElement("input");
    deleteCourseSubmitEl.setAttribute("type", "submit");
    deleteCourseSubmitEl.setAttribute("id", `delete-course-${index}`);
    deleteCourseSubmitEl.value = "Radera";
    deleteCourseSubmitEl.classList.add("delete-button");
    //Onclick for delete button
    deleteCourseSubmitEl.onclick = function () {
      event.preventDefault();
      deleteCourse(index, course.id);
      coursenameInput.value = "";
      descriptionInput.value = "";
      priceInput.value = "";
      categoryInput.value = "";
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
    updateFormEl.appendChild(deleteCourseSubmitEl);
    updateFormEl.appendChild(document.createElement("br"));
  });
}

// Display drinks
export async function displayDrinksAdmin() {
  const drinks = await getDrinks();

  const updateFormEl = document.getElementById("update-form");

  // Create and append drink header
  const drinkHeader = document.createElement("h2");
  drinkHeader.classList.add("dryck-header");
  drinkHeader.textContent = "Dryck";
  updateFormEl.appendChild(drinkHeader);

  // Display drinks
  drinks.menu.forEach((drink, index) => {
    // Generate unique IDs for each input
    const drinknameId = `drinkname-${index}`;
    const drinkDescriptionId = `drink-description-${index}`;
    const drinkPriceId = `drink-price-${index}`;

    // Drinkname
    const drinknameLabel = document.createElement("label");
    drinknameLabel.setAttribute("for", drinknameId);
    drinknameLabel.textContent = `Dryck: ${drink.drinkname}`;

    const drinknameInput = document.createElement("input");
    drinknameInput.setAttribute("type", "text");
    drinknameInput.setAttribute("id", drinknameId);
    drinknameInput.setAttribute("name", "drinknameAdmin");
    drinknameInput.value = drink.drinkname;

    // Description
    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", drinkDescriptionId);
    descriptionLabel.textContent = `Beskrivning: ${drink.description}`;

    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", drinkDescriptionId);
    descriptionInput.setAttribute("name", "descriptionDrinkAdmin");
    descriptionInput.value = drink.description;

    // Price
    const priceLabel = document.createElement("label");
    priceLabel.setAttribute("for", drinkPriceId);
    priceLabel.textContent = `Pris: ${drink.price} kr`;

    const priceInput = document.createElement("input");
    priceInput.setAttribute("type", "text");
    priceInput.setAttribute("id", drinkPriceId);
    priceInput.setAttribute("name", "priceDrinkAdmin");
    priceInput.value = drink.price;

    // Submit
    const updateDrinkSubmitEl = document.createElement("input");
    updateDrinkSubmitEl.setAttribute("type", "submit");
    updateDrinkSubmitEl.setAttribute("id", `update-drink-${index}`);
    updateDrinkSubmitEl.value = "Uppdatera";
    // Onclick for update button
    updateDrinkSubmitEl.onclick = function () {
      event.preventDefault();
      updateDrink(index, drink.id);
    };

    // Delete
    const deleteDrinkSubmitEl = document.createElement("input");
    deleteDrinkSubmitEl.setAttribute("type", "submit");
    deleteDrinkSubmitEl.setAttribute("id", `delete-drink-${index}`);
    deleteDrinkSubmitEl.value = "Radera";
    // Onclick for delete button
    deleteDrinkSubmitEl.onclick = function () {
      event.preventDefault();
      deleteDrink(index, drink.id);
      drinknameInput.value = "";
      descriptionInput.value = "";
      priceInput.value = "";
    };

    // Append elements to update form
    updateFormEl.appendChild(drinknameLabel);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(drinknameInput);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(descriptionLabel);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(descriptionInput);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(priceLabel);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(priceInput);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(updateDrinkSubmitEl);
    updateFormEl.appendChild(document.createElement("br"));
    updateFormEl.appendChild(deleteDrinkSubmitEl);
    updateFormEl.appendChild(document.createElement("br"));
  });
}

//Update course
async function updateCourse(index, id) {
  const url = `${apiUrl}/api/courses/${id}`;

  const coursename = document.getElementById(`coursename-${index}`).value;
  const description = document.getElementById(`description-${index}`).value;
  const price = document.getElementById(`price-${index}`).value;
  const category = document.getElementById(`category-${index}`).value;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ coursename, description, price, category }),
  });
  if (response.ok) {
    location.reload();
  }
}

//Delete course
async function deleteCourse(index, id) {
  const url = `${apiUrl}/api/courses/${id}`;

  const coursename = document.getElementById(`coursename-${index}`).value;
  const description = document.getElementById(`description-${index}`).value;
  const price = document.getElementById(`price-${index}`).value;
  const category = document.getElementById(`category-${index}`).value;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ coursename, description, price, category }),
  });
  if (response.ok) {
    location.reload();
  }
}

// Update drinks
async function updateDrink(index, id) {
  const url = `${apiUrl}/api/drinks/${id}`;

  const drinkname = document.getElementById(`drinkname-${index}`).value;
  const description = document.getElementById(
    `drink-description-${index}`
  ).value;
  const price = document.getElementById(`drink-price-${index}`).value;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ drinkname, description, price }),
  });
  if (response.ok) {
    location.reload();
  }
}

// Delete drinks
async function deleteDrink(index, id) {
  const url = `${apiUrl}/api/drinks/${id}`;

  const drinkname = document.getElementById(`drinkname-${index}`).value;
  const description = document.getElementById(
    `drink-description-${index}`
  ).value;
  const price = document.getElementById(`drink-price-${index}`).value;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ drinkname, description, price }),
  });
  if (response.ok) {
    location.reload();
  }
}

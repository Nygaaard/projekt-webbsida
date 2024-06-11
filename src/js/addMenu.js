const addCourseErrMsgEl = document.getElementById("addCourseErrMsg");
const addDrinkErrMsgEl = document.getElementById("addDrinkErrMsg");

const apiUrl = process.env.API_URL;
const token = localStorage.getItem("token");

//Function for adding courses
export async function addCourse(coursename, description, price, category) {
  if (!coursename || !description || !price || !category) {
    addCourseErrMsgEl.textContent = "Alla fält måste fyllas i";
    return;
  }
  try {
    const url = `${apiUrl}/api/courses`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        coursename,
        description,
        price,
        category,
      }),
    });
    if (response.ok) {
      location.reload();
    }
  } catch (error) {
    console.log("Error adding new course");
  }
}

//Function for adding drinks
export async function addDrink(drinkname, description, price) {
  if (!drinkname || !description || !price) {
    addDrinkErrMsgEl.textContent = "Alla fält måste fyllas i";
    return;
  }
  try {
    const url = `${apiUrl}/api/drinks`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        drinkname,
        description,
        price,
      }),
    });
    if (response.ok) {
      location.reload();
    }
  } catch (error) {
    console.log("Error adding new drink");
  }
}

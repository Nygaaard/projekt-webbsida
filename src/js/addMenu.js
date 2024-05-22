const addCourseErrMsgEl = document.getElementById("addCourseErrMsg");
const addDrinkErrMsgEl = document.getElementById("addDrinkErrMsg");

const apiUrl = process.env.API_URL;

//Function for adding courses
export async function addCourse(coursename, description, price, category) {
  try {
    if (!coursename || !description || !price || !category) {
      addCourseErrMsgEl.textContent = "Alla fält måste fyllas i";
    }

    const url = `${apiUrl}/api/courses`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coursename,
        description,
        price,
        category,
      }),
    });
  } catch (error) {
    console.log("Error adding new course");
  }
}

//Function for adding drinks
export async function addDrink(drinkname, description, price) {
  try {
    if (!drinkname || !description || !price) {
      addDrinkErrMsgEl.textContent = "Alla fält måste fyllas i";
    }

    const url = `${apiUrl}/api/drinks`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        drinkname,
        description,
        price,
      }),
    });
  } catch (error) {
    console.log("Error adding new drink");
  }
}

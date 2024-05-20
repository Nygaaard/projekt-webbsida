const addCourseErrMsgEl = document.getElementById("addCourseErrMsg");
const addDrinkErrMsgEl = document.getElementById("addDrinkErrMsg");

export async function addCourse(coursename, description, price, category) {
  try {
    if (!coursename || !description || !price || !category) {
      addCourseErrMsgEl.textContent = "Alla fält måste fyllas i";
    }

    const url = "http://localhost:3000/api/courses";

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

export async function addDrink(drinkname, description, price) {
  try {
    if (!drinkname || !description || !price) {
      addDrinkErrMsgEl.textContent = "Alla fält måste fyllas i";
    }

    const url = "http://localhost:3000/api/drinks";

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

const apiUrl = process.env.API_URL;

//Get data from courses table
export async function getCourses() {
  const url = `${apiUrl}/api/courses`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch {
    console.error("Kunde inte hämta data");
  }
}

//Get data from drinks table
export async function getDrinks() {
  const url = `${apiUrl}/api/drinks`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch {
    console.error("Kunde inte hämta data");
  }
}

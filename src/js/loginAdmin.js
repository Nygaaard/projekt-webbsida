//Login admin

const apiUrl = process.env.API_URL;

//Variables
const errMessageLogEl = document.getElementById("errMessageLog");

export async function loginAdmin(username, password) {
  //If any input field is missing

  if (username.length < 5) {
    errMessageLogEl.textContent = "Användarnamn måste innehålla minst 5 tecken";
    return;
  }
  if (password.length < 8) {
    errMessageLogEl.textContent = "Lösenord måste innehålla minst 8 tecken";
    return;
  }

  try {
    const url = `${apiUrl}/api/login`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    //If wrong username/password
    if (!response.ok) {
      errMessageLogEl.textContent = "Fel användarnamn eller lösenord";
    }

    const data = await response.json();
    const token = data.response.token;
    const validate = await validateUser(token);

    //Validate authorization
    if (validate.message === "Protected route") {
      window.location.href = `admin?username=${username}`;
    }
  } catch (error) {
    errMessageLogEl.textContent = "Fel användarnamn eller lösenord";
  }
}

//Validate user
export async function validateUser(token) {
  const url = `${apiUrl}/api/protected`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Inloggningen misslyckades");
      }
      localStorage.setItem("token", token);

      return response;
    })
    .catch((error) => {
      console.error("Fel vid inloggning:", error.message);
    });
  return response.json();
}

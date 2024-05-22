//Login admin

//Variables
const errMessageLogEl = document.getElementById("errMessageLog");
const errmessageFailEl = document.getElementById("errMessageFail");
const errMessage = sessionStorage.getItem("failedLogin");

if (window.location.pathname.includes("login")) {
  if (errMessage) {
    errmessageFailEl.textContent = errMessage;
  }
}

export async function loginAdmin(username, password) {
  try {
    //If any input field is missing
    if (!username || !password) {
      if (!username) {
        errMessageLogEl.textContent = "Fyll i användarnamnet";
      }
      if (!password) {
        errMessageLogEl.textContent = "Fyll i lösenordet";
      }
      errMessageLogEl.textContent =
        "Både användarnamn och lösenord måste fyllas i ";
    }

    const url = "http://localhost:3000/api/login";

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
      sessionStorage.removeItem("failedLogin");
      alert("Du är inloggad");

      window.location.href = `admin?username=${username}`;
    }
  } catch (error) {
    errmessageFailEl.textContent = "";
    sessionStorage.removeItem("failedLogin");
    errMessageLogEl.textContent = "Fel användarnamn eller lösenord";
  }
}

//Validate user
export async function validateUser(token) {
  const url = "http://localhost:3000/api/protected";
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

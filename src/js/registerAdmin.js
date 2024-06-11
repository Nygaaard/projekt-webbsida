//Register new admin

//Variables
const errMessageRegEl = document.getElementById("errMessageReg");
const registerSuccessEl = document.getElementById("registerSuccess");

const apiUrl = process.env.API_URL;

export async function registerAdmin(
  firstname,
  lastname,
  email,
  username,
  password
) {
  try {
    //Validation
    //If any input field is empty
    if (!firstname || !lastname || !email || !username || !password) {
      registerSuccessEl.textContent = "";
      errMessageRegEl.textContent = "Alla fält måste fyllas i.";
      return;
    }

    // Invalid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      registerSuccessEl.textContent = "";
      errMessageRegEl.textContent = "Ogiltig email-adress.";

      return;
    }

    //Invalid username
    if (username.length < 5) {
      registerSuccessEl.textContent = "";
      errMessageRegEl.textContent =
        "Användarnamn måste vara minst 5 tecken långt.";
      return;
    }

    //Invalid password
    if (password.length < 8) {
      registerSuccessEl.textContent = "";
      errMessageRegEl.textContent =
        "Lösenordet måste vara minst 8 tecken långt.";
      return;
    }

    const url = `${apiUrl}/api/register`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        username,
        password,
      }),
    });

    //If register succeeds
    if (!response.ok) {
      errMessageRegEl.textContent = "Kunde inte registrera ny användare.";
      return;
    }

    //Return result
    const data = await response.json();

    let firstnameEl = document.getElementById("firstname");
    let lastnameEl = document.getElementById("lastname");
    let emailEl = document.getElementById("email");
    let usernameEl = document.getElementById("username");
    let passwordEl = document.getElementById("password");

    firstnameEl.value = "";
    lastnameEl.value = "";
    emailEl.value = "";
    usernameEl.value = "";
    passwordEl.value = "";

    errMessageRegEl.textContent = "";
    registerSuccessEl.textContent = "Du är nu registrerad";

    return data;
  } catch (error) {
    console.log("Error register new user:");
  }
}

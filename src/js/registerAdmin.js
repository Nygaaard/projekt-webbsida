//Register new admin

//Variables
const errMessageRegEl = document.getElementById("errMessageReg");

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
      errMessageRegEl.textContent = "Alla fält måste fyllas i.";
      return;
    }

    // Invalid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errMessageRegEl.textContent = "Ogiltig email-adress.";
      return;
    }

    //Invalid username
    if (username.length < 5) {
      errMessageRegEl.textContent =
        "Användarnamn måste vara minst 5 tecken långt.";
      return;
    }

    //Invalid password
    if (password.length < 8) {
      errMessageRegEl.textContent =
        "Lösenordet måste vara minst 8 tecken långt.";
      return;
    }

    const url = "http://localhost:3000/api/register";
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
    alert("Du är nu registrerad!");

    let firstnameEl = document.getElementById("firstname");
    let lastnameEl = document.getElementById("lastname");
    let emailEl = document.getElementById("email");
    let usernameEl = document.getElementById("username");
    let passwordEl = document.getElementById("password");

    firstnameEl.value = "";
    lastnameEl.value = "";
    emailEl.value = "";
    usernameEl = "";
    passwordEl.value = "";

    return data;
  } catch (error) {
    console.log("Error register new user:");
  }
}

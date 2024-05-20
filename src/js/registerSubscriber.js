//Register new admin

//Variables
const errMessageSubscriberEl = document.getElementById("errMessageSubscribe");
errMessageSubscriberEl.setAttribute("id", "errMessageFail");

export async function registerSubscriber(firstname, lastname, email, address) {
  try {
    //Validation
    //If any input field is empty
    if (!firstname || !lastname || !email || !address) {
      errMessageSubscriberEl.textContent = "Alla fält måste fyllas i.";
    }

    //Invalid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errMessageSubscriberEl.textContent = "Ogiltig email-adress.";
      return;
    }

    const url = "http://localhost:3000/api/subscribers";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        address,
      }),
    });

    //If register succeeds
    if (!response.ok) {
      errMessageSubscriberEl.textContent =
        "Kunde inte registrera prenumeration.";
    }

    //Return result
    const data = await response.json();
    alert("Du prenumererar nu på nyhetsbrevet!");

    let firstnameEl = document.getElementById("firstname");
    let lastnameEl = document.getElementById("lastname");
    let emailEl = document.getElementById("email");
    let addressEl = document.getElementById("address");

    firstnameEl.value = "";
    lastnameEl.value = "";
    emailEl.value = "";
    addressEl.value = "";

    return data;
  } catch (error) {
    errMessageSubscriberEl.textContent = "Något gick fel...";
  }
}

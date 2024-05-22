//Register new admin

//Variables
const errMessageSubscriberEl = document.getElementById("errMessageSubscribe");
if (window.location.pathname.includes("index")) {
  errMessageSubscriberEl.classList.add("errMessageSub");
}

const apiUrl = process.env.API_URL;

export async function registerSubscriber(firstname, lastname, email, address) {
  try {
    //Validation
    //If any input field is empty
    if (!firstname || !lastname || !email || !address) {
      errMessageSubscriberEl.textContent = "Alla fält måste fyllas i.";
      return;
    }

    //Invalid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errMessageSubscriberEl.textContent = "Ogiltig email-adress.";
      return;
    }

    const url = `${apiUrl}/api/subscribers`;
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
      return;
    }

    //Return result
    const data = await response.json();
    alert("Du prenumererar nu på nyhetsbrevet!");

    let firstnameEl = document.getElementById("firstnameSub");
    let lastnameEl = document.getElementById("lastnameSub");
    let emailEl = document.getElementById("emailSub");
    let addressEl = document.getElementById("addressSub");

    if (firstnameEl && lastnameEl && emailEl && addressEl) {
      // Clear input fields
      firstnameEl.value = "";
      lastnameEl.value = "";
      emailEl.value = "";
      addressEl.value = "";
    } else {
      console.error("One or more input elements not found");
    }

    return data;
  } catch (error) {
    console.log(error);
    errMessageSubscriberEl.textContent = "Något gick fel...";
  }
}

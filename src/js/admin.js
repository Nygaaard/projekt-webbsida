//Validate user
document.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = "https://projekt-server-zbif.onrender.com";
  const token = localStorage.getItem("token");
  const validateUrl = `${apiUrl}/api/protected`;

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  try {
    const response = await fetch(validateUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error("Token är ogiltig");
    }

    const data = await response.json();

    if (data.message !== "Protected route") {
      throw new Error("Token är ogiltig");
    }

    // Valid token
  } catch (error) {
    console.error("Validering av token misslyckades:", error);
    window.location.href = "login.html";
  }
});

const form = document.getElementById("loginForm");
const errorEl = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log({ email, password });
  try {
    const res = await fetch("http://localhost:3000/user/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    console.log({ res, data });

    if (!res.ok) {
      errorEl.textContent = data.message || "Login failed";
      return;
    }

    // Redirect;
    window.location.href = "./blogs.html";
  } catch (err) {
    errorEl.textContent = "Server error";
  }
});

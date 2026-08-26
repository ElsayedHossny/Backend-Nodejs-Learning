const form = document.getElementById("signupForm");
const errorEl = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  try {
    const res = await fetch("http://localhost:3000/user/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, age, gender }),
    });

    const data = await res.json();

    if (!res.ok) {
      errorEl.textContent = data.message || "Signup failed";
      return;
    }

    alert("Account created successfully");
    window.location.href = "./login.html";
  } catch (err) {
    errorEl.textContent = "Server error";
  }
});

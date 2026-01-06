const form = document.getElementById("regForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!fullName || !email || !password) {
    message.textContent = "All fields are required";
    return;
  }

  const data = {
    _type: "registration",
    fullName,
    email,
    password
  };

  await fetch("https://gzfytly2.api.sanity.io/v2023-01-01/data/mutate/production", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer sk99dySbGYbkP40MZMdWKmVZ0i3dmpynBPfAjfczvuEtnGwmn7ysV9M74QiWAiosM0FYIGIMsqlElaHV2LtB4KqooiysNPJbmLtLUq9JTQSq06AvGGahVJ9UQoqrQ4vZuMq3FBchYG3ylJKPyaRflN9rxSTqOL8jRQ6uGAalSN7l0MJn6GC6"
    },
    body: JSON.stringify({ mutations: [{ create: data }] })
  });

  message.textContent = "Verified!";
  form.reset();
});

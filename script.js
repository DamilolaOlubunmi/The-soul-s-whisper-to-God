// // Simple form handler for subscription (demo)
// document.getElementById('subscribe-form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   if (email) {
//     alert(`Thanks for subscribing, ${email}!`);
//     this.reset();
//   }
// });

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  });

  alert("Thanks for subscribing!");
  form.reset();
});


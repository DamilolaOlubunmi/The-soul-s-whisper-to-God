// Simple form handler for subscription (demo)
document.getElementById('subscribe-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (email) {
    alert(`Thanks for subscribing, ${email}!`);
    this.reset();
  }
});

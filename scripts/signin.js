document.addEventListener('DOMContentLoaded', function () {
    console.log("password: 1234");

    const login = document.getElementById('btn-login');

    login.addEventListener('click', function (event) {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log("User typed " + email + " for email & " + password + " for password.");
        if (password === "1234") {
            console.log("Password Correct!")
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('isAuthN', 'true');

            window.location.assign("../index.html");
        } else {
            console.log("Password Incorrect")
            sessionStorage.setItem('isAuthN', 'false');
        }
    });
});

function updateHeader() {
  const isLoggedIn = sessionStorage.getItem("isAuthN") === "true"
  const loginBtn = document.getElementById("btn-login")
  const logoutBtn = document.getElementById("logoutBtn")

  if (loginBtn && logoutBtn) {
    if (isLoggedIn) {
      loginBtn.style.display = "none"
      logoutBtn.style.display = "block"
    } else {
      loginBtn.style.display = "block"
      logoutBtn.style.display = "none"
    }
  }
}

function logout() {
  sessionStorage.clear();
  window.location.href = "pages/signin.html";
}

updateHeader()
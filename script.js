
console.log("Portfolio loaded successfully!");

// Contact button message
function showMessage() {
    alert("Thanks for visiting my portfolio!");
}

function changeTitle() {
    document.querySelector("h1").innerText = "Welcome to My Portfolio";
}

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerText = "☀️ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
});
console.log("This is Vaishnavi's branch");
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value;
        // Perform your search logic here, e.g., filter content based on the search term
        console.log("Search term: " + searchTerm);
    });
});

function focusField(fieldId) {
    const label = document.getElementById(`${fieldId}-label`);
    label.classList.add('active');
}

function blurField(fieldId) {
    const label = document.getElementById(`${fieldId}-label`);
    const input = document.getElementById(fieldId);
    if (input.value === '') {
        label.classList.remove('active');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.querySelector("#login-link");
    const registerLink = document.querySelector("#register-link");

    loginLink.addEventListener("click", function () {
        window.location.href = "login.html";
    });

    registerLink.addEventListener("click", function () {
        window.location.href = "register.html";
    });
});


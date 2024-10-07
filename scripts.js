document.addEventListener("DOMContentLoaded", () => {
    // Typewriter effect
    const title = "Bienvenue sur mon Portfolio!";
    let index = 0;

    const typeWriter = () => {
        if (index < title.length) {
            document.getElementById("typewriter").innerHTML += title.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };

    typeWriter();

    // Dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "Mode Clair";
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        darkModeToggle.textContent = isDarkMode ? "Mode Clair" : "Mode Sombre";

        // Save the current theme in localStorage
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
});

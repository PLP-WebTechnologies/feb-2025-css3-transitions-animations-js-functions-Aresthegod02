// Function to store theme preference in localStorage
function saveThemePreference(isDark) {
  localStorage.setItem("darkMode", isDark ? "true" : "false");
}

// Function to load and apply saved preference
function applyStoredPreference() {
  const isDark = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark", isDark);
}

// Toggle theme and trigger animation
document.getElementById("themeToggle").addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  document.body.classList.toggle("dark", isDark);
  saveThemePreference(isDark);

  // Add animation class to logo
  const logo = document.getElementById("logo");
  logo.classList.add("pulse");
  setTimeout(() => logo.classList.remove("pulse"), 1000); // remove after 1s
});

// Add extra animation class via JS
const style = document.createElement("style");
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  #logo.pulse {
    animation: pulse 1s ease;
  }
`;
document.head.appendChild(style);

// Initialize preference
applyStoredPreference();

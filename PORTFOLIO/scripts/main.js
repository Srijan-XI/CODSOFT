// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');

// Helper: set theme and persist
function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    themeToggle.checked = false;
    localStorage.setItem('theme', 'light');
  }
}

// On toggle change
themeToggle.addEventListener('change', () => {
  setTheme(themeToggle.checked);
});

// On page load: restore preference or system setting
(function () {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) {
    setTheme(true);
  } else {
    setTheme(false);
  }
})();

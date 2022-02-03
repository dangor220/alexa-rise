window.addEventListener("load", () => {
  // set language
  const lang = localStorage.getItem("lang");
  if (lang) {
    getTranslete(lang);
  }

  // set theme
  const theme = localStorage.getItem("theme");
  if (theme) {
    setTheme(theme);
  }
});

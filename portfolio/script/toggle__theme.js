const themeBtn = document.querySelector(".toggle__theme");
const hamburgerLight = document.querySelector(".hamburger");
const hamburgerLine = document.querySelectorAll(".line");
const navLight = document.querySelector(".header__list");
const navLinkLight = document.querySelectorAll(".header__list-link");
const titleLight = document.querySelectorAll(".title");
const portBtn = document.querySelectorAll(".portfolio__tab-item");

themeBtn.addEventListener("click", () => {
  let themeSwitch = document.body.classList.contains("light__theme")
    ? "dark"
    : "light";
  setTheme(themeSwitch);
});

function setTheme(theme) {
  localStorage.setItem("theme", theme);

  themeBtn.style.backgrounImage = `url("../icons/${theme}__theme.svg")`;

  if (theme === "light") {
    themeBtn.classList.add("active");
    navLight.classList.add("hamburgerLight");
    hamburgerLine.forEach((line) => {
      line.classList.add("hamburgerLineLight");
    });
    navLinkLight.forEach((i) => {
      i.classList.add("hamburgerLight");
    });

    document.body.classList.add("light__theme");
    titleLight.forEach((item) => {
      item.classList.add("light__theme_title");
    });
    portBtn.forEach((item) => {
      item.classList.add("light__theme_btn");

      if (item.classList.contains("portfolio__tab-item_active")) {
        item.classList.add("active_light");
      }

      tabs.addEventListener("click", function (event) {
        for (const item of tabs.children) {
          item.classList.remove("active_light");
        }

        event.target.classList.add("active_light");
      });
    });
  } else {
    themeBtn.classList.remove("active");
    navLight.classList.remove("hamburgerLight");
    hamburgerLine.forEach((line) => {
      line.classList.remove("hamburgerLineLight");
    });
    navLinkLight.forEach((i) => {
      i.classList.remove("hamburgerLight");
    });

    document.body.classList.remove("light__theme");
    titleLight.forEach((item) => {
      item.classList.remove("light__theme_title");
    });
    portBtn.forEach((item) => {
      item.classList.remove("light__theme_btn");
      if (item.classList.contains("portfolio__tab-item_active")) {
        item.classList.remove("active_light");
      }
      item.classList.remove("active_light");
    });
  }
}

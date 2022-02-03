const tabs = document.querySelector(".portfolio__tabs");
const portfolioItems = document.querySelector(".portfolio__items");
const seasons = ["winter", "spring", "summer", "autumn"];
const ph = document.querySelectorAll(".portfolio__item-photo");

// Кеширование изображений из папки portfolit/*/...
function preloadPortfolioImages() {
  seasons.forEach((season, index) => {
    const img = new Image();
    img.src = `images/portfolio/${season}/${index + 1}.jpg`;
  });
}
preloadPortfolioImages();

// Обработка события при клике на табы
tabs.addEventListener("click", function (event) {
  const tagN = event.target.tagName;
  const tabData = event.target.dataset.weather;
  const photos = Array.from(portfolioItems.children);

  if (tagN !== "BUTTON") return;

  for (const item of tabs.children) {
    item.classList.remove("portfolio__tab-item_active");
  }

  function slow() {
    ph.forEach((item) => {
      item.classList.add("animation__photo");
    });
  }

  function hide() {
    ph.forEach((item) => {
      item.classList.remove("animation__photo");
    });
  }

  slow();

  setTimeout(hide, 600);

  event.target.classList.add("portfolio__tab-item_active");

  photos.forEach((img, index) => {
    img.src = `images/portfolio/${tabData}/${index + 1}.jpg`;
  });
});

const languages = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    standard: "Standard",
    premium: "Premium",
    gold: "Gold",
    "price-description-1":
      "One location<br /> 120 photos in color<br /> 12 photos in retouch<br /> Readiness 2-3 weeks<br /> Make up, visage",
    "price-description-2":
      "One or two locations<br /> 200 photos in color<br /> 20 photos in retouch<br /> Readiness 1-2 weeks<br /> Make up, visage",
    "price-description-3":
      "Three locations or more<br /> 300 photos in color<br /> 50 photos in retouch<br /> Readiness 1 week<br /> Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    standard: "Стандарт",
    premium: "Премиум",
    gold: "Золото",
    "price-description-1":
      "Одна локация<br /> 120 цветных фото<br /> 12 отретушированных фото<br /> Готовность через 2-3 недели<br /> Макияж, визаж",
    "price-description-2":
      "Одна-две локации<br /> 200 цветных фото<br /> 20 отретушированных фото<br /> Готовность через 1-2 недели <br />Макияж, визаж",
    "price-description-3":
      "Три локации и больше<br /> 300 цветных фото<br /> 50 отретушированных фото<br /> Готовность через 1 неделю<br /> Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};

const lang = document.querySelector(".header__list-item_langeuage");
const allTags = document.querySelectorAll("*");
const price = document.querySelectorAll(".price__item");

lang.addEventListener("click", (event) => {
  let currentLanguage;

  if (event.target.tagName === "A") {
    currentLanguage = event.target.textContent;
  }

  getTranslete(currentLanguage);
});

function getTranslete(language) {
  localStorage.setItem("lang", language);

  if (language === "ru") {
    Array.from(lang.children).forEach((item) => {
      item.classList.remove("switch_active");
    });
    Array.from(lang.children).forEach((item) => {
      if (item.textContent === language) {
        item.classList.add("switch_active");
      }
    });

    allTags.forEach((item) => {
      if (languages[language][item.dataset.language]) {
        item.innerHTML = languages[language][item.dataset.language];
      }
    });

    price.forEach((item) => {
      item.classList.add("price__item_ru");
    });
  } else {
    Array.from(lang.children).forEach((item) => {
      item.classList.remove("switch_active");
    });
    Array.from(lang.children).forEach((item) => {
      if (item.textContent === language) {
        item.classList.add("switch_active");
      }
    });

    allTags.forEach((item) => {
      if (languages[language][item.dataset.language]) {
        item.innerHTML = languages[language][item.dataset.language];
      }
    });

    price.forEach((item) => {
      item.classList.remove("price__item_ru");
    });
  }
}

(function () {
  const path = window.location.pathname;

  const titles = {
    "/": "Home - Vite App",
    "/about": "About Us - Vite App",
    "/contact": "Contact - Vite App",
    "/admin": "Admin Panel - Vite App",
  };

  window.APP_CONFIG = {
    PAGE_TITLE: titles[path] || "Vite App",
  };
})();

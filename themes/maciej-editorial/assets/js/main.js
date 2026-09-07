(function () {
  const root = document.documentElement;
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  function themeLabel(theme) {
    return theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  }

  if (themeToggle) {
    themeToggle.setAttribute("aria-label", themeLabel(root.dataset.theme));
    themeToggle.addEventListener("click", function () {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
      themeToggle.setAttribute("aria-label", themeLabel(next));
    });
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      navToggle.querySelector(".sr-only").textContent = open ? "Open navigation" : "Close navigation";
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      });
    });
  }
})();


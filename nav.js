(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    const inside = nav.contains(e.target) || toggle.contains(e.target);
    if (!inside) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
})();

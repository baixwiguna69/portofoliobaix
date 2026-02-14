// Tunggu halaman siap
document.addEventListener("DOMContentLoaded", function () {

  // Theme Switch
  const btn = document.getElementById("themeBtn");

  if (btn) {
    btn.onclick = () => {
      document.body.classList.toggle("light");

      btn.textContent =
        document.body.classList.contains("light")
          ? "🌞"
          : "🌙";
    };
  }

  // Scroll Animation
  const fades = document.querySelectorAll(".fade");

  function showOnScroll() {
    fades.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  // Jalankan saat load
  showOnScroll();

  // Jalankan saat scroll
  window.addEventListener("scroll", showOnScroll);

});

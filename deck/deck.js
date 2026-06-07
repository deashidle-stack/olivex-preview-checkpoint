const slides = Array.from(document.querySelectorAll(".slide"));
const count = document.querySelector("[data-count]");

function currentIndex() {
  const midpoint = window.scrollY + window.innerHeight / 2;
  return slides.findIndex((slide) => {
    const top = slide.offsetTop;
    const bottom = top + slide.offsetHeight;
    return midpoint >= top && midpoint < bottom;
  });
}

function updateCount() {
  const index = Math.max(0, currentIndex());
  count.textContent = `${index + 1} / ${slides.length}`;
}

function go(delta) {
  const index = Math.max(0, currentIndex());
  const next = Math.min(slides.length - 1, Math.max(0, index + delta));
  slides[next].scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("[data-prev]").addEventListener("click", () => go(-1));
document.querySelector("[data-next]").addEventListener("click", () => go(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") go(1);
  if (event.key === "ArrowLeft" || event.key === "PageUp") go(-1);
});

document.addEventListener("scroll", updateCount, { passive: true });
updateCount();

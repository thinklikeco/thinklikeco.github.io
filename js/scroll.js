if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y < 0) {
    document.body.classList.add("show");
  } else {
    document.body.classList.remove("show");
  }
});
observer.observe(document.querySelector("#top-pixel-anchor"));

let hidebutton = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y > 0) {
    document.body.classList.remove("show");
  }
});
hidebutton.observe(document.querySelector("#button-anchor"));
}

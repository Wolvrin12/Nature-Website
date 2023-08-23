const header = document.getElementsByTagName("nav");
const tabs = document.getElementsByTagName("li");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    let selected = document.getElementsByClassName("selected")[0];
    selected.classList.remove("selected");
    tabs[i].classList.add("selected");
  });
}

ScrollTrigger.create({
  trigger: header,
  start: "top center",
  onUpdate: (self) => {
    if (self.progress <= 0.85) {
      header[0].style.background = "#e9ecef";
    } else {
      header[0].style.background = "#1b2834";
    }
  },
});

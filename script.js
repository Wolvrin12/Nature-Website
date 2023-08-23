const tabs = document.getElementsByTagName("li");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    let selected = document.getElementsByClassName("selected")[0];
    selected.classList.remove("selected");
    tabs[i].classList.add("selected");
  });
}

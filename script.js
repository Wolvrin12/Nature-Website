const header = document.getElementsByTagName("nav")[0];
const logo = header.children[0].children[0];
const tabs = document.getElementsByTagName("li");

const useUpStyles = () => {
  let selected_tab = document.getElementsByClassName("selected")[0];
  header.style.background = "#e9ecef";
  logo.style.color = "#113b3b";
  selected_tab.style.background = "#cbced2";
};

const useDownStyles = () => {
  let selected_tab = document.getElementsByClassName("selected")[0];
  header.style.background = "#1b2834";
  logo.style.color = "#979bdb";
  selected_tab.style.background = "#1a092f";
};

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    let selected = document.getElementsByClassName("selected")[0];
    selected.classList.remove("selected");
    selected.style.background = "none";
    tabs[i].classList.add("selected");
    useUpStyles();
  });
}

ScrollTrigger.create({
  start: "top",
  onUpdate: (self) => {
    if (self.progress <= 0.85) {
      useUpStyles();
    } else {
      useDownStyles();
    }
  },
});

// Store the selected elements that we are going to use.
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// const menu = document.querySelectorAll("a");
// for (let a of menu) {
//   a.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll("a")
      .forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

const last = document.querySelector("#last");
// use the date object
const today = new Date();
// const options = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// };
// const formatter = new Intl.DateTimeFormat("en-US", options);
// const dateTimeString = formatter.format(new Date());

const lastModified = document.lastModified;
const formattedDateTime = new Date(lastModified).toLocaleString();

last.innerHTML = `Last modification ${formattedDateTime}`;

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

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

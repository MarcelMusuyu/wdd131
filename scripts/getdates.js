const last = document.querySelector("#last");
// use the date object
const today = new Date();

last.innerHTML = `Last modification ${new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
}).format(today)}`;

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

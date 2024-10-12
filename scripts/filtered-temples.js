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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April 6",
    area: 100000, // Approximate area
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/draper-utah/800x500/draper-utah-lds-temple-1079449-wallpaper.jpg",
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March 27",
    area: 10000, // Approximate area
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbus-ohio/800x500/columbus-temple-lds-406110-wallpaper.jpg",
  },
  {
    templeName: "Nauvoo Temple",
    location: "Nauvoo, Illinois, United States",
    dedicated: "1846, October 1",
    area: 50000, // Approximate area
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/800x500/nauvoo-temple-lds-776436-wallpaper.jpg",
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "1998, November 29",
    area: 100000, // Approximate area
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-collins-colorado/800x500/fort-collins-colorado-temple-morning-exterior-1776055-wallpaper.jpg",
  },
  {
    templeName: "Seoul Korea Temple",
    location: "Seoul, South Korea",
    dedicated: "1985, August 26",
    area: 80000, // Approximate area
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/800x500/seoul-korea-temple-lds-424784-wallpaper.jpg",
  },

  // Add more temple objects here...
];

createTempleCard(temples);

const home = document.querySelector("#home");
home.addEventListener("click", () => {
  createTempleCard(temples);
});

const old = document.querySelector("#old");
old.addEventListener("click", () => {
  createTempleCard(
    temples.filter((temple) => {
      // Extract the year from the dedicated property
      const dedicatedParts = temple.dedicated.split(",");
      const dedicatedYear = parseInt(dedicatedParts[0]);

      // Filter based on the year (replace 1983 with your desired year)
      return dedicatedYear < 1900;
    })
  );
});
const new_Temple = document.querySelector("#new");

new_Temple.addEventListener("click", () => {
  // Split the string into an array using comma as the delimiter
  // const dateParts = dateString.split(",");

  // // Extract the year and convert it to a number
  // const year = parseInt(dateParts[0]);
  createTempleCard(
    temples.filter((temple) => {
      // Extract the year from the dedicated property
      const dedicatedParts = temple.dedicated.split(",");
      const dedicatedYear = parseInt(dedicatedParts[0]);

      // Filter based on the year (replace 1983 with your desired year)
      return dedicatedYear > 2000;
    })
  );
});

const large = document.querySelector("#large");
large.addEventListener("click", () => {
  createTempleCard(temples.filter((temple) => temple.area > 90000));
});

const small = document.querySelector("#small");
small.addEventListener("click", () => {
  createTempleCard(temples.filter((temple) => temple.area < 10000));
});

function createTempleCard(filteredTemple) {
  document.querySelector(".temple").innerHTML = "";
  filteredTemple.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label"> Location: </span> ${temple.location}`;
    dedication.innerHTML = `<span cla ss="label"> Dedicated: </span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label"> Size: </span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);
    document.querySelector(".temple").appendChild(card);
  });
}

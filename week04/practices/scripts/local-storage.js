// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

localStorage.setItem("userProfil", "images/girl09.webp");
const currentImage = localStorage.getItem("userProfil");
const imgElem = document.querySelector("img");
console.log(currentImage);
imgElem.setAttribute("src", currentImage);

const arrayOfObjects = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const jsonString = JSON.stringify(arrayOfObjects);
localStorage.setItem("myArrayOfObjects", jsonString);
const storedJsonString = localStorage.getItem("myArrayOfObjects");
const retrievedArrayOfObjects = JSON.parse(storedJsonString);

const container = document.getElementById("objectContainer");

retrievedArrayOfObjects.forEach((obj) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <strong>Name:</strong> ${obj.name}<br>
    <strong>Age:</strong> ${obj.age}
  `;
  container.appendChild(div);
});
container.style.display = "flex";
const container2 = document.getElementById("objectContainer2");
container2.style.display = "flex";
container2.style.flexDirection = "column";

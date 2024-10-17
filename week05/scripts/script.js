const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
function displayList(item) {
  const li = document.createElement("li");
  li.textContent = item === "" ? "Helaman 5:2" : item;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus;
  });
  deleteButton.classList.add("delete"); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.appendChild(deleteButton);

  list.appendChild(li);
}
button.addEventListener("click", () => {
  const myItem = input.value;
  if (myItem.trim() === "") {
    const li = document.createElement("li");
    li.innerHTML = "<strong>Please make sure to fill the input</strong>";
    li.style.backgroundColor = "#dbbb57";
    li.style.color = "#3c2d04";
    list.appendChild(li);
    console.log(getChapterList());
    input.focus();
  } else {
    input.value = "";
    displayList(myItem); // call the function that ouputs the submitted chapter
    chaptersArray.push(myItem); // add the chapter to the array
    setChapterList(); //update the localStorage with the new array
  }

  input.focus();
});

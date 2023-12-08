const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === "") {
        window.alert("Up to this point, do you want to do nothing? Write something :)");
    }
    else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
 if (e.target.tagName === "LI") {
     e.target.classList.toggle("checked");
     saveData();
 }
 else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
 }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
loadData();
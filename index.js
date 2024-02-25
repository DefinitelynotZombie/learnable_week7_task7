const inputButton = document.querySelector(".inputButton");
const inputBox = document.getElementById("input-box");
const parent_ul = document.querySelector("ul");
const new_li = document.createElement("li");
const icon = document.createElement("i");

inputButton.addEventListener("click", () => {
    let inputValue = inputBox.value;
    if (inputValue === '') {
        alert("You must write something");
    } else {
        let new_li = document.createElement("li");
        let icon = document.createElement("i");
        icon.classList.add("far", "fa-circle");
        new_li.appendChild(icon);
        const new_todo = document.createTextNode(inputValue);
        new_li.appendChild(new_todo);
        parent_ul.appendChild(new_li);
        let span = document.createElement("span")
        span.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        span.querySelector("i").addEventListener("click", () => {
            new_li.remove(); 
            saveData()
        });
        new_li.appendChild(span)
        inputBox.value = ''
        saveData()
    }
});

parent_ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        const icon = e.target.querySelector("i");
        saveData() 

        if (icon.classList.contains("fa-circle") && icon.classList.contains("far")) {
            icon.classList.remove("far", "fa-circle");
            icon.classList.add("fa-solid", "fa-circle-check");
            saveData()
        } else {
            icon.classList.remove("fa-solid", "fa-circle-check");
            icon.classList.add("far", "fa-circle");
            saveData()
        }
    }else if (e.target.tagName === "I" && e.target.classList.contains("fa-xmark")) {
        e.target.parentElement.parentElement.remove(); // Remove the parent li element
        saveData();
    }
    
});

function saveData(){
    console.log("Saving data:", parent_ul.innerHTML);
    localStorage.setItem("data", parent_ul.innerHTML);}

function showData(){
    const savedData = localStorage.getItem("data");
    if (savedData) {
        parent_ul.innerHTML = savedData;
    }

}
showData()
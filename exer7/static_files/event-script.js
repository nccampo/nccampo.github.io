const addButton = document.getElementById("add-item")
const addItem = () => {
    const foodname = document.getElementById("foodname");
    const newElement = document.createElement("li");
    newElement.innerText = toString(foodname);
}

addButton.addEventListener("click", addItem)


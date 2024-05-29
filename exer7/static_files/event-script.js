const addButton = document.getElementById("add-item");
const foodList = document.getElementById("food-list");

//function to add a new item
const addItem = () => {
    //get the input values
    const foodname = document.getElementById("foodname").value;
    const desc = document.getElementById("desc").value;
    const url = document.getElementById("url").value;
    const rank = document.getElementById("rank").value;

    //create a new list item and food card elements
    const newElement = document.createElement("li");
    newElement.className = "food-card";
    newElement.innerHTML = `
        <img src="${url}" alt="${foodname}">
        <h2>${foodname}</h2>
        <p>${desc}</p>
        <p class="rank">Rank: ${rank}</p>
    `;

    //add form details to food list
    foodList.appendChild(newElement);

    //clear form fields
    document.getElementById("foodname").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("url").value = "";
    document.getElementById("rank").value = "";
}

addButton.addEventListener("click", (e) => {
    e.preventDefault(); // prevent form submission
    addItem();
});

// function that sorts food by rank
const sortFoodList = () => {
    const foodListItems = Array.from(foodList.children);
    foodListItems.sort((a, b) => {
        const rankA = parseInt(a.querySelector(".rank").textContent.split(" ")[1]);
        const rankB = parseInt(b.querySelector(".rank").textContent.split(" ")[1]);
        return rankA - rankB;
    });
    foodList.innerHTML = "";
    foodListItems.forEach((item) => {
        foodList.appendChild(item);
    });
}

// call sortFoodList function after adding a new item
addButton.addEventListener("click", () => {
    setTimeout(sortFoodList, 0);
});
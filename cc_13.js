// Task 2: Adding Employee Cards Dynamically
const employeeContainer = document.getElementById("employeeContainer");

function createEmployeeCard(name, position) {
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card");

    const heading = document.createElement("h3");
    heading.textContent = name;

    const paragraph = document.createElement("p");
    paragraph.textContent = position;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(removeButton);

    employeeContainer.appendChild(card);
}

// Add sample employees
createEmployeeCard("John Doe", "Software Engineer");
createEmployeeCard("Jane Smith", "Product Manager");
createEmployeeCard("Alice Johnson", "UX Designer");
// Task 3: Converting NodeLists to Arrays for Bulk Updates
const employeeCards = document.querySelectorAll(".employee-card");
const employeeCardsArray = Array.from(employeeCards);

employeeCardsArray.forEach(card => {
    card.style.backgroundColor = "#e0f7fa"; // Light blue background
});
// Task 4: Implementing Removal of Employee Cards with Event Bubbling
employeeContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const card = event.target.closest(".employee-card");
        employeeContainer.removeChild(card);
    } else {
        console.log("Employee card clicked");
    }
});
// Task 5: Inline Editing of Employee Details
employeeContainer.addEventListener("dblclick", (event) => {
    const card = event.target.closest(".employee-card");
    if (!card) return;

    const heading = card.querySelector("h3");
    const paragraph = card.querySelector("p");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = heading.textContent;

    const positionInput = document.createElement("input");
    positionInput.type = "text";
    positionInput.value = paragraph.textContent;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    card.innerHTML = "";
    card.appendChild(nameInput);
    card.appendChild(positionInput);
    card.appendChild(saveButton);

    saveButton.addEventListener("click", () => {
        heading.textContent = nameInput.value;
        paragraph.textContent = positionInput.value;

        card.innerHTML = "";
        card.appendChild(heading);
        card.appendChild(paragraph);
        card.appendChild(document.createElement("button").textContent = "Remove");
    });
});
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
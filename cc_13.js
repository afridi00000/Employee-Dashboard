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
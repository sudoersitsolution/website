// Define the project categories and their projects
const projectCategories = [
    {
        category: "AI projects",
        projects: [
            { title: "Chronic Obstructive Pulmonary Disease Prediction System", link: "project1.html" },
            { title: "Liver Cirrhosis Prediction System using Random Forest", link: "project2.html" },
            { title: "Multiple Disease Prediction System using Machine Learning", link: "project3.html" },
            { title: "Stroke Prediction System using Linear Regression", link: "project4.html" },
            { title: "Skin Disease Detection System Using CNN", link: "project5.html" },
            { title: "Heart Failure Prediction System", link: "project6.html" },
            { title: "Pneumonia Detection using Chest X-Ray", link: "project7.html" },
            { title: "Parkinson’s Detector System using Python", link: "project8.html" },
            { title: "Cancer Prediction using Naive Bayes", link: "project9.html" },
            { title: "Depression Detection System using Python", link: "project10.html" }
        ]
    },
    {
        category: "Deep Learning projects",
        projects: [
            { title: "AI Mental Health Therapist Chatbot", link: "project11.html" },
            { title: "Artificial Intelligence HealthCare Chatbot System", link: "project12.html" },
            { title: "Artificial Intelligence Dietician", link: "project13.html" },
            { title: "Your Personal Nutritionist Using FatSecret API", link: "project14.html" }
        ]
    },
    {
        category: "Web projects",
        projects: [
            { title: "Face Recognition Attendance System for Employees using Python", link: "project15.html" },
            { title: "Face Recognition Attendance System using Python", link: "project16.html" }
        ]
    },
    // Add more categories here as needed...
];

// Function to display the project list dynamically
function displayProjects() {
    const projectListContainer = document.getElementById("project-list");

    // Loop through each category
    projectCategories.forEach(category => {
        // Create a category element
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("category");

        // Create a title for the category
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category.category;
        categoryElement.appendChild(categoryTitle);

        // Create the list for the projects under this category
        const projectList = document.createElement("ul");
        projectList.classList.add("project-list");

        // Loop through the projects in the category
        category.projects.forEach(project => {
            const projectItem = document.createElement("li");
            projectItem.classList.add("project-item");

            // Create a link for the project title
            const projectLink = document.createElement("a");
            projectLink.href = project.link;
            projectLink.textContent = project.title;

            // Append the link to the project item
            projectItem.appendChild(projectLink);

            // Add the project item to the list
            projectList.appendChild(projectItem);
        });

        // Append the project list to the category element
        categoryElement.appendChild(projectList);

        // Append the category element to the main container
        projectListContainer.appendChild(categoryElement);
    });
}
// Function to toggle between light and dark mode

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const toggleButton = document.getElementById("darkModeToggle");

    console.log(toggleButton);
    // Save theme preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Check for saved theme preference in localStorage and apply it
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
};
// Function to toggle the visibility of the contact numbers
function toggleContactNumber() {
    const contactNumbers = document.getElementById("contact-numbers");
    const toggleButton = document.getElementById("toggle-contact");

    // Toggle visibility of the contact numbers
    if (contactNumbers.style.display === "none") {
        contactNumbers.style.display = "block"; // Show contact numbers
        toggleButton.textContent = "Hide Contact Numbers"; // Change button text
    } else {
        contactNumbers.style.display = "none"; // Hide contact numbers
        toggleButton.textContent = "Show Contact Numbers"; // Change button text
    }
}


// Call the function to display the projects
displayProjects();



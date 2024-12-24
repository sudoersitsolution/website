document.addEventListener("DOMContentLoaded", () => {
const projectAddItem = () => {
  const projects = [
    { title: "Chronic Obstructive Pulmonary Disease Prediction System",description:"to-do description" },
    { title: "Liver Cirrhosis Prediction System using Random Forest", description:"to-do description" },
    { title: "Multiple Disease Prediction System using Machine Learning",description:"to-do description" },
    { title: "Stroke Prediction System using Linear Regression", description:"to-do description" },
    { title: "Heart Failure Prediction System", description:"to-do description" },
    { title: "Pneumonia Detection using Chest X-Ray", description:"to-do description" },
    { title: "Parkinson’s Detection System using Python", description:"to-do description" },
    { title: "Breast Cancer Prediction using Naive Bayes", description:"to-do description" },
    { title: "Depression Detection System using Python", description:"to-do description" },
    { title: "Credit Card Fraud Detection System Python", description:"to-do description" },
    { title: "Fake Product Review Monitoring and Removal for Genuine Ratings", description:"to-do description" },
    { title: "Movie Success Prediction System using Python", description:"to-do description" },
    { title: "Predicting House Price Using Decision Tree", description:"to-do description" },
    { title: "Cryptocurrency Price Prediction Using Machine Learning Python", description:"to-do description" },
    { title: "TV Show Popularity Analysis Using Data Mining", description:"to-do description" },
    { title: "Music Genres Classification using KNN System", description:"to-do description" },
    { title: "Personality Prediction System Through CV Analysis", description:"to-do description" },
    { title: "Malware Analysis and Detection Using Machine Learning Algorithm", description:"to-do description" },
    { title: "SMS Spam Detection using Machine Learning", description:"to-do description" },
    { title: "Sleep Disorder Prediction Using Machine Learning", description:"to-do description" },
    { title: "Drug Addiction Prediction Using Machine Learning", description:"to-do description" },
    { title: "Obesity Risk Prediction using Machine Learning", description:"to-do description" },
    { title: "Health Insurance Price Prediction using Machine Learning", description:"to-do description" },
    { title: "Smart Diabetes Prediction System Using Machine Learning Algorithms", description:"to-do description" },
    { title: "Customer Churn Prediction using Machine Learning", description:"to-do description" },
    { title: "Real Estate Price Prediction using Machine Learning", description:"to-do description" },
    { title: "Bitcoin Price Prediction using Machine Learning", description:"to-do description" },
    { title: "Sleep Time Prediction", description:"to-do description" },
  ];

  const itemsPerPage = 5; // Number of items per page
  let currentPage = 1; // Current page index
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const renderProjects = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleProjects = projects.slice(startIndex, endIndex);

    let elements = "";
    visibleProjects.forEach((item, index) => {
      elements += `
      <div class="project__item-wrapper">
        <div class="project__item">
          <p>${startIndex + index + 1}. ${item.title}</p> <span class="project__item-plus">+</span>  
        </div>
        <p class="project__item-description">${item.description}</p>
      </div>
      `;
    });
    const PreviousButton=`
<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" fill-rule="nonzero"/></svg>
    `
    const nextButton =`
    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fill-rule="nonzero"/></svg>

    `

    const projectList = document.querySelector(".project__list-ai");
    projectList.innerHTML = elements;

    const paginationControls = `
      <button ${currentPage === 1 ? "disabled" : ""} id="prev">${PreviousButton}</button>
      <span>Page ${currentPage} of ${totalPages}</span>
      <button ${currentPage === totalPages ? "disabled" : ""} id="next">${nextButton}</button>
    `;

    const paginationContainer = document.querySelector(".pagination-ai");
    paginationContainer.innerHTML = paginationControls;

 const accordionHeaders = document.querySelectorAll('.project__item');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const item = this.nextElementSibling;
      const secondChild = this.children[1];
        accordionHeaders.forEach(otherItem =>{
          if(this != otherItem && otherItem.nextElementSibling.classList.contains('active')){
            otherItem.nextElementSibling.classList.remove('active')
          otherItem.children[1].textContent="+"
          }
        })
      item.classList.toggle('active');
      secondChild.textContent=="+" 
      ? secondChild.textContent= "-" 
      :secondChild.textContent="+"
    });
  });
    // Add event listeners for buttons
    document.getElementById("prev").addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderProjects();
      }
    });

    document.getElementById("next").addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderProjects();
      }
    });
  };


  renderProjects();
};

projectAddItem();
})

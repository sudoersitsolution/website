document.addEventListener("DOMContentLoaded", () => {
const projectAddItem = () => {
  const projects = [
    { 
      title: "Chronic Obstructive Pulmonary Disease Prediction System",
      description:"Chronic obstructive pulmonary disease (COPD) is a prevalent respiratory disease and ranks third in global mortality rates, imposing a significant burden on patients and society. This review looks at recent research, both domestically and abroad, on the application of machine learning (ML) for early COPD screening. The review discusses the practical application, key optimization points, and prospects of ML techniques in early COPD screening. The aim is to establish a scientific foundation and reference framework for future research and the development of screening strategies."
    },
    { 
      title: "Liver Cirrhosis Prediction",
      description:"Cirrhosis results from prolonged liver damage, leading to extensive scarring, often due to conditions like hepatitis or chronic alcohol consumption.Liver cirrhosis is a highly infectious blood-borne illness that is often asymptomatic in its early stages. As a result, diagnosing and treating patients during the early stages of illness is challenging. As the illness progresses to its latter stages, diagnosis and therapy become increasingly challenging. The purpose of this work is to offer an artificial intelligence system based on machine learning algorithms that may assist healthcare practitioners in making an early diagnosis of liver cirrhosis."
    },
    {
      title: "Multiple Disease Prediction System using Machine Learning",
      description:"The project Multiple Disease Prediction using Machine Learning,Deep Learning  focuses on predicting three different diseases: diabetes, heart disease, and breast cancer. The prediction models are built using machine learning algorithms" 
    },
    {
      title: "Stroke Prediction System using Machine learning",
      description:"Stroke, a devastating medical condition, is a leading cause of mortality worldwide. It occurs when the blood supply to the brain is interrupted or reduced, impairing brain functions1. As per the World Stroke Organization (WSO), there is a significant risk associated with strokes, with one in four individuals over the age of 25 facing the possibility of experiencing a stroke during their lifetime2. Stroke is a common condition that significantly affects the population. Stroke is the second most common cause of death and the third most prevalent reason for impairment in adults globally. It is a major factor in both death and disability3. The significant impact of chronic illness on people, families, and healthcare systems highlights the need for precise and timely prediction techniques to enhance patient outcomes4"
    },
    {
      title: "Heart Failure Prediction System",
      description:"Cardiovascular diseases (CVDs) are the number 1 cause of death globally, taking an estimated 17.9 million lives each year, which accounts for 31% of all deaths worlwide.Most cardiovascular diseases can be prevented by addressing behavioural risk factors such as tobacco use, unhealthy diet and obesity, physical inactivity and harmful use of alcohol using population-wide strategies. People with cardiovascular disease or who are at high cardiovascular risk (due to the presence of one or more risk factors such as hypertension, diabetes, hyperlipidaemia or already established disease) need early detection and management wherein a machine learning model can be of great help." },
    {
      title: "Pneumonia Detection using Chest X-Ray",
      description:"Pneumonia is a common respiratory infection caused by multiple types of bacteria, viruses, and fungi. It is the leading cause of morbidity and mortality worldwide, particularly among infants under the age of five and the elderly. According to WHO1, 1.4 million pneumonia-related fatalities among children under five in 2018. Chest X-ray imaging is commonly used to diagnose pneumonia, as it can reveal important symptoms, such as increased lung opacity and consolidation. However, it can be difficult to interpret a chest X-ray (CXR) because pneumonia symptoms can be subtle and overlap with other lung diseases. Rapid and accurate diagnosis of pneumonia is essential for expediting treatment and improving patient outcomes. Radiological images, such as chest X-rays or CT scans, require specialized training and can be time-consuming to diagnose pneumonia.In recent years, there has been significant interest to develop model using machine learning techniques that assist physicians in diagnosing pneumonia using chest X-ray images. These techniques have shown promising results and may improve the efficacy and accuracy of pneumonia diagnosis." },
    { 
      title: "Parkinson’s Detection System using Python",
      description:"Parkinson’s disease is a progressive disorder of the central nervous system affecting movement and inducing tremors and stiffness. It has 5 stages to it and affects more than 1 million individuals every year in India. This is chronic and has no cure yet. It is a neurodegenerative disorder affecting dopamine-producing neurons in the brain." },
    {
      title: "Breast Cancer Prediction using Machine learning",
      description:"Cancer occurs when changes called mutations take place in genes that regulate cell growth. The mutations let the cells divide and multiply in an uncontrolled, chaotic way. The cells keep on proliferating, producing copies that get progressively more abnormal. In most cases, the cell copies eventually end up forming a tumor. Breast cancer occurs when a malignant (cancerous) tumor originates in the breast. As breast cancer tumors mature, they may metastasize (spread) to other parts of the body. The primary route of metastasis is the lymphatic system which, ironically enough, is also the body's primary system for producing and transporting white blood cells and other cancer-fighting immune system cells throughout the body." 
    },
    {
      title: "Depression Detection System using Python",
      description:"Depression is a leading cause of mental illness, and it has been linked to an increased risk of premature death. Furthermore, it is a major contributor to suicidal thoughts and causes significant impairment in daily life. Every year, one in every 15 adults suffers from depression, affecting 300 million people worldwide. Several previous empirical studies have shown that certain linguistic characteristics can be analyzed and correlated to likely depression symptoms, as well as help predict self-destructive behavior. This Depression Detection System detects the type of depression (anxiety, PTSD, or bipolar) and recommends nearby clinics to consult a psychiatrist. Furthermore, the user must speak for 1 minute about themselves while their facial expressions are being recorded. The user must take a quiz and answer all of the questions." 
    },
    {
      title: "Credit Card Fraud Detection System Python",
      description:"Recently, with the advent of technological innovation and the emergence of new e-service payment solutions, such as e-commerce and mobile payments, credit card transactions have become ubiquitous. Because cashless transactions are so widely accepted, fraudsters carry out fraudulent assaults frequently and modify their strategies to escape detection. Credit card fraud is defined as unauthorized card usage, unusual transaction behaviour, or transactions on an inactive card. Credit card breaches have been trending alarmingly in the past couple of years. " 
    },
    { 
      title: "Fake Product Review Monitoring and Removal for Genuine Ratings",
      description:"The scope and need of online markets and e-commerce platforms are on the rise and many people buy products from these platforms. The amount of feedbacks for products as a result are also present in detail for users to analyze the product they are buying. This can work against the users as well because users can sometime bombard the review section with extreme opinion comments which can work in favor or against the product. Thus, we need to take care of this because this can be done either by the merchant to increase the value of his product or the user to degrade the ratings of that product." 
    },
    { title: "Movie Success Prediction System using Python",
      description:" This project  predict the success of a movie based on factors such as ratings, genre, budget etc. The application of the project focusses mainly on the prediction helping the theatre owners/distributors to decide the terms of their deal such as the number of screens in which the movie must run and the amount/share that must be paid back to the distibutors." 
    },

    {
      title: "Predicting House Price Using Decision Tree",
      description:"Different people buy houses with the same value at different prices, which usually leads to dissatisfaction with housing prices and unfair housing prices. To solve this problem, we designed an objective housing price prediction scheme based on a decision tree." 
    },

    {
      title: "Cryptocurrency Price Prediction Using Machine Learning Python",
      description:"Cryptocurrency is a type of digital currency similar to dollars, euros, and yen. The difference is that instead of the backing of a nation or federal bank, it uses an online ledger with strong cryptography to secure online transactions. Through cryptocurrency exchanges, one can buy and sell cryptocurrencies. It can also be “mined.” The popularity of cryptocurrencies skyrocketed in 2017 as a result of several months of exponential growth in their market capitalization. With increasing geopolitical and economic issues over the last two years, global currency values have fallen, stock markets have had a bad run, and investors have lost wealth. This has rekindled interest in digital currencies. Our system aids in cryptocurrency price prediction using machine learning." 
    },
    {
      title: "TV Show Popularity Analysis Using Data Mining",
      description:"" 
    },
    {
      title: "Music Genres Classification using KNN System",
      description:"" 
    },
    {
      title: "Personality Prediction System Through CV Analysis",
      description:"" 
    },
    {
      title: "Malware Analysis and Detection Using Machine Learning Algorithm",
      description:"" 
    },
    {
      title: "SMS Spam Detection using Machine Learning",
      description:"" 
    },
    {
      title: "Sleep Disorder Prediction Using Machine Learning",
      description:"" 
    },
    {
      title: "Drug Addiction Prediction Using Machine Learning",
    description:"" 
    },
    {
      title: "Obesity Risk Prediction using Machine Learning",
      description:"" 
    },
    {
      title: "Health Insurance Price Prediction using Machine Learning",
      description:"" 
    },
    {
      title: "Smart Diabetes Prediction System Using Machine Learning Algorithms",
    description:"" 
    },
    {
      title: "Customer Churn Prediction using Machine Learning",
      description:""
    },
    {
      title: "Real Estate Price Prediction using Machine Learning",
      description:""
    },
    {
      title: "Bitcoin Price Prediction using Machine Learning",
      description:"" 
    },
    {
      title: "Sleep Time Prediction",
      description:"" 
    },
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

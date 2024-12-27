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
      description:"Reality TV is the new mantra of television producers and channel executives. It is the means to increase TRP ratings and the end is always to outdo the other channels and the “similar -but-tweaked-here-and-there” shows churned out by the competition. Most of the television shows which are being telecast nowadays are reality shows specializing in dancing, singing, and acting. We conclude to build such a system that will recognize people’s sentimental comments on TV shows. The comments from the viewer will be extracted along with the viewer details such as gender, location, etc…The comments will be gathered from various sources and the entry will be maintained into the excel sheet. The excel file will contain peoples name, email id, age, gender, location and comment. Based on people’s comment and sentiments, the TV Show popularity will be rated accordingly. " 
    },
    {
      title: "Music Genres Classification using KNN System",
      description:"The Primary objective of this project is to successfully train an ML Algorithm to be able to classify any sound byte of any piece of music as one of the common genres in music. The inherent nature of music to have recurring patterns, set tempos, and other aspects of music theory make AI/ML algorithms perfect for the job of understanding and classifying music.  the music files themselves can be considered data as they carry all technical and categorically discernable parameters of the music are self-contained in the file thereby only needing for them to be of set sample lengths/sizes and set file formats." 
    },
    {
      title: "Personality Prediction System Through CV Analysis",
      description:"This will enable a more effective way to short list submitted candidate CVs from a large number of applicants providing a consistent and fair CV ranking policy, which can be legally justified. System will rank the experience and key skills required for particular job position. Than system will rank the CV’s based on the experience and other key skills which are required for particular job profile. This system will help the HR department to easily shortlist the candidate based on the CV ranking policy. This system will focus not only in qualification and experience but also focuses on other important aspects which are required for particular job position. This system will help the human resource department to select right candidate for particular job profile which in turn provide expert workforce for the organization." 
    },
    {
      title: "Malware Analysis and Detection Using Machine Learning Algorithm",
      description:"With the rapid development of the Internet, malware became one of the major cyber threats nowadays. Any software performing malicious actions, including information stealing, espionage, etc. can be referred to as malware. Kaspersky Labs (2017) define malware as a type of computer program designed to infect a legitimate user's computer and inflict harm on it in multiple ways.The major flaw here is that signature checkers can only detect malware that has been seen before. That’s a rather large blind spot, given that hundreds of thousands of new malware variants are created every single day. Machine learning, on the other hand, can be trained to recognize the signs of good and bad files, enabling it to identify malicious patterns and detect malware – regardless of whether it’s been seen before or not." 
    },
    {
      title: "SMS Spam Detection using Machine Learning",
      description:"The SMS Spam Detection project is a machine learning initiative designed to classify SMS messages as either spam or not spam. This model leverages advanced algorithms to analyze the content of text messages and make predictions about their nature. Developed using the Python programming language, the model is capable of performing accurate classifications." 
    },
    {
      title: "Sleep Disorder Prediction Using Machine Learning",
      description:"The purpose of this project is to analyze factors that affect sleep health and predict which sleep disorder a person may have based on various factors such as Sleep Quality, Stress Level, BMI Index, Blood Pressure, etc. The dataset used for this project was sourced from Kaggle. The project involved data preprocessing to fill null values, exploratory data analysis (EDA), and the implementation of machine learning models to make predictions." 
    },
    {
      title: "Drug Addiction Prediction Using Machine Learning",
    description:"This project aims to analyze and predict drug consumption patterns using various datasets that provide comprehensive information on demographics, personality traits, and drug usage. the project will explore correlations between young people and drug addiction. Additionally, machine learning algorithms will be employed to predict the most commonly consumed drugs. This analysis aims to contribute to a better understanding of drug addiction patterns and support efforts in public health and policy-making." 
    },
    {
      title: "Obesity Risk Prediction using Machine Learning",
      description:"Obesity is a pressing global health concern, with millions affected worldwide and significant implications for morbidity, mortality, and healthcare costs. The prevalence of obesity has tripled since 1975, now affecting approximately 30% of the global population. This escalating trend underscores the urgent need to address the multifaceted risks associated with excess weight. Obesity is a leading cause of various health complications, including diabetes, heart disease, osteoarthritis, sleep apnea, strokes, and high blood pressure, significantly reducing life expectancy and increasing mortality rates. Effective prediction of obesity risk is crucial for implementing targeted interventions and promoting public health.project aims to predict obesity levels in individuals using a range of input features. Utilizing machine learning techniques, this model was trained in order to classify the obesity level based on personal, behavioral, and dietary data." 
    },
    {
      title: "Health Insurance Price Prediction using Machine Learning",
      description:"Medical insurance costs are critical considerations in healthcare planning and financial decision-making. Understanding the factors influencing these costs is essential for both insurers and policyholders. Machine learning provides a powerful toolset to analyze and predict medical insurance expenses based on diverse variables. In this context, predictive modeling techniques such as K-Nearest Neighbors (KNN), XGBoost, Linear Regression, and Random Forest Regression have emerged as effective means to estimate and forecast medical insurance costs. By leveraging patterns and relationships within datasets derived from individual and local health information, these models contribute to more accurate predictions, assisting in risk assessment, resource allocation, and overall decision-making within the healthcare insurance domain. This repository explores the application of these machine learning models to enhance our understanding and prediction of medical insurance costs, utilizing a dataset sourced from Kaggle that encapsulates various features relevant to insurance forecasting" 
    },
    {
      title: "Smart Diabetes Prediction System Using Machine Learning Algorithms",
    description:"The increasing prevalence of diabetes worldwide necessitates the development of effective predictive models to aid in early diagnosis and management. This project aims to leverage machine learning techniques to predict the likelihood of diabetes in individuals based on a range of medical attributes. Utilizing the PIMA Diabetes dataset, which includes various health indicators such as glucose levels, blood pressure, and body mass index, the project employs a Support Vector Machine (SVM) for classification." 
    },
    {
      title: "Customer Churn Prediction using Machine Learning",
      description:"In the competitive business landscape, retaining customers is crucial for sustained growth and profitability. This project aims to predict customer churn using machine learning techniques, enabling businesses to identify at-risk customers and implement targeted retention strategies. The project utilizes a dataset containing various customer attributes such as demographics, purchase history, and interaction data.  A range of machine learning algorithms are employed to build predictive models. The dataset undergoes preprocessing steps such as handling missing values, encoding categorical variables, and normalizing numerical features to ensure optimal model performance. Feature selection techniques are applied to identify the most significant predictors of churn."
    },
    {
      title: "Bitcoin Price Prediction using Machine Learning",
      description:"The volatile nature of Bitcoin prices presents a significant challenge for investors and traders. This project aims to predict Bitcoin prices using machine learning techniques, providing valuable insights for making informed investment decisions. The project utilizes historical Bitcoin price data, including features such as opening, closing, high, and low prices, as well as trading volume." 
    },
    {
      title: "Sleep Time Prediction",
      description:"The main objective of this  project is to analyze various lifestyle and medical variables of individuals, such as age, BMI, physical activity, sleep duration, blood pressure, etc., and use this information to predict the occurrence and type of sleep disorder they may experience. Sleep disorders, like Insomnia and Sleep Apnea, can have significant impacts on an individual's health and overall well-being. By identifying individuals at risk of sleep disorders, appropriate interventions and treatments can be provided to improve their sleep quality and overall health." 
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

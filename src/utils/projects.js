
const projectAddItem= ()=> {
const projects = [
  {title:"Chronic Obstructive Pulmonary Disease Prediction System", link:""},
  {title:"Liver Cirrhosis Prediction System using Random Forest", link:""},
  {title:"Multiple Disease Prediction System using Machine Learning",link:""},
  {title:"Stroke Prediction System using Linear Regression",link:""},
  {title:"Heart Failure Prediction System",link:""},
  {title:"Pneumonia Detection using Chest X-Ray",link:""},
  {title:"Parkinson’s Detection System using Python",link:""},
  {title:"8.breast Cancer Prediction using Naive Bayes",link:""},
  {title:"Depression Detection System using Python",link:""},
  {title:"Credit Card Fraud Detection System Python",link:""},
  {title:"Fake Product Review Monitoring and Removal for Genuine Ratings",link:""},
  {title:"Movie Success Prediction System using Python",link:""},
  {title:"Predicting House Price Using Decision Tree",link:""},
  {title:"Cryptocurrency Price Prediction Using Machine Learning Python",link:""},
  {title:"TV Show Popularity Analysis Using Data Mining",link:""},
  {title:"Music Genres Classification using KNN System",link:""},
  {title:"Personality Prediction System Through CV Analysis",link:""},
  {title:"Malware Analysis and Detection Using Machine Learning Algorithm",link:""},
  {title:"SMS Spam Detection using Machine Learning",link:""},
  {title:"Sleep Disorder Prediction Using Machine Learning",link:""},
  {title:"drug Addiction Prediction Using Machine Learning",link:""},
  {title:"Obesity Risk Prediction using Machine Learning",link:""},
  {title:"Health Insurance Price Prediction using Machine Learning",link:""},
  {title:"Smart Diabetes Prediction System Using Machine Learning Algorithms",link:""},
  {title:"Customer Churn Prediction using Machine Learning",link:""},
  {title:"Real Estate Price Prediction using Machine Learning",link:""},
  {title:"Bitcoin Price Prediction using Machine Learning",link:""},
  {title:"Sleep Time Prediction",link:""},
]

let elements=``
projects.forEach((item,index)=>{
   elements =elements+ `
          <div class="project__item">
          <p>${index}. 
         ${item.title} 
          </p>
          <a href="${item.link}">document</a>  
          </div>
  `
  
  
})
const project_list = document.querySelector('.project__list')
project_list.innerHTML=elements
}

projectAddItem()

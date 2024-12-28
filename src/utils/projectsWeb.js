const projectAddItemWeb = () => {
  const projectsWeb= [
  {title: "Advance attendence using QR code",description:"An attendance system which generates QR codes dynamically every 'n' seconds to keep the attendance taking secure. This system also has proxy detection module and like every automated system makes the proccess fast."},
{title: "exam seating arrangement system",description: "During exam period it is very hectic task to find out where is your examination hall and which seat would allocate to a perticular student.This is a web application developed to help students to find out their respective examination hall during semester exam. This would also shows the respective seat of a student in a perticular row and also the schedule of their examination.  It is an application in which you can search your roll number to find out your examination classroom.If you want to know about your complete class then this facility is also available you just have to search your class , year and branch. You can also enter examination hall number to see which class is allocated to which class."},
{title: "vu alumni-student connectbook",description:"Web Based Online Alumni Management System helps institutes strategically build and maintain their alumni network, by facilitating engagement, community-building, networking, communications and many other methods. And thus a secondary array of positive marketing takes place. With Alumni Management System, the Alumni data can be centralized and combined to use it in any future endeavours.  Alumni System is a online application system which can act as a interactive medium between the old student and the School, College, University or institution. An Online Alumni System is a web based application which helps the institutions to track old students and to track them for future endeavours."},
{title: "career counseling platform",description:"Counsel is a web-based application to help students to make effective career choices. It is a very user-friendly platform which will surely be very easy to use and a powerful tool for all students."},
{title: "mcq based test system for exam prepration",description:"It is an online MCQ test platform made using reactJS, nodeJS, ExpressJS, MySql in which a teacher after registering on the platform can upload a test and a unique link will be created. The students who have access to the test link can give the test.A detailed report of their result is analyzed by the teacher an is shown to the students. The Student as well as teacher can add blogs on the website if they are login and comment on others blogs.Important notices can be displayed to students entered by the teachers."},
{title: "recipe finder application",description:"The Recipe Finder project is a web application designed to help users discover meal recipes based on the ingredients they have on hand. Users can enter one or more ingredients into the search bar, and the application will fetch and display recipes that include all specified ingredients. By leveraging TheMealDB API, the app provides detailed recipe information, including instructions, ingredient lists, and images."},
{title: "Secure Voting System Using Blockchain",description:"An e-Voting system has to have heightened security in order make sure it is available to voters but protected against outside influences changing votes from being cast, or keep a voter’s ballot from being tampered with. Many electronic voting systems rely on to hide the identity of voters. However, this technique does not provide total anonymity or integrity since many intelligence agencies around the world control different parts of the Internet which can allow them to identify or intercept votes."},
{title: "personalized nutrition and fitness management system",description:"The Personalised Fitness Management System (unique to the user) aims to address the growing need for efficient management of personal fitness routines and health data. With the rise of health consciousness and the adoption of fitness activities, individuals often struggle to organize and track their fitness goals, routines, and progress effectively. This system will provide a comprehensive solution to manage fitness data efficiently, helping users monitor their progress and achieve their health objectives more effectively."},
{title: "online tutor finding application",description:"The Tuition Management System is a comprehensive web application developed to enhance the efficiency and productivity of tutors in managing online tutoring sessions. this system streamlines session scheduling, billing, report card generation, payment tracking, student tracking, and other academic-related tasks. With a focus on automating various processes, the system aims to simplify the administrative workload for tutors and provide a seamless experience for both tutors and parents."},
{title: "Online book exchange platform ",description:"The Book Exchange is a one stop book trading platform, allowing users to not only search for their favorite books by ISBN, but also intereact with other users to trade books with each other."},
{title: "Online cosmetics store ",description:"online shopping beauty store for Buying cosmetics & beauty products. You can Browse makeup, health products & more from top beauty brands on Stunners HUb. It has mainly four-category products - Makeup, Skincare, Haircare, and Fragrances. You can filter various beauty products category, ratings, and pricewise.It also has features of adding to cart, wishlist, login, et"},
{title: "Online tourist guide",description:"web application to create a schedule for atraveler travelling to a city to exploreitby specifying interests and types of places want to visit. Our system then smartly analyzes the questionnaire and creates a schedule fortraveler based on provided timeand gives a shortest route to reach all places from one to another "},
{title: "Expense tracker application",description:"Expense Tracker designed to help users manage their expenses and achieve financial freedom. It allows users to log their expenses, view statistics using pie charts and bar plots, and track their income and expenses over time."},
{title: "Patient Record Management system",description:"Patient Management System (PMS) is a comprehensive web-based application designed to streamline healthcare facilities and enhance patient management. This project aims to provide a centralized platform that allows doctors, patients, and clinic administrators to efficiently manage medical records, appointments, and communication.The primary objective of the Patient Management System is to improve the patient experience, optimize healthcare provider efficiency, and maintain accurate and secure medical records. By leveraging technology, the system simplifies the management of healthcare facilities and enhances the overall quality of care provided."},
  ];

  const itemsPerPageWeb = 5; // Number of items per page
  let currentPageWeb = 1; // Current page index
  const totalPagesWeb = Math.ceil(projectsWeb.length / itemsPerPageWeb);

  const renderProjectsWeb = () => {
    const startIndexWeb = (currentPageWeb - 1) * itemsPerPageWeb;
    const endIndexWeb = startIndexWeb + itemsPerPageWeb;
    const visibleProjectsWeb = projectsWeb.slice(startIndexWeb, endIndexWeb);

    let elementsWeb = "";
    visibleProjectsWeb.forEach((item, index) => {
      elementsWeb += `
      <div class="project__item-wrapper">
        <div class="project__item-web">
          <p>${startIndexWeb + index + 1}. ${item.title}</p> <span class="project__item-plus">+</span>  
        </div>
          <p class="project__item-description">${item.description}</p>
        </div>
      `;
    });
    const PreviousButtonWeb=`
<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" fill-rule="nonzero"/></svg>
    `
    const nextButtonWeb =`
    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fill-rule="nonzero"/></svg>

    `

    const projectListWeb = document.querySelector(".project__list-web");
    projectListWeb.innerHTML = elementsWeb;

    const paginationControlsWeb = `
      <button ${currentPageWeb === 1 ? "disabled" : ""} id="prev-web">${PreviousButtonWeb}</button>
      <span>Page ${currentPageWeb} of ${totalPagesWeb}</span>
      <button ${currentPageWeb === totalPagesWeb ? "disabled" : ""} id="next-web" >${nextButtonWeb}</button>
    `;

    const paginationContainerWeb = document.querySelector(".pagination-web");
    paginationContainerWeb.innerHTML = paginationControlsWeb;
 const accordionHeadersWeb = document.querySelectorAll('.project__item-web');
  accordionHeadersWeb.forEach(header => {
    header.addEventListener('click', function () {
      const item = this.nextElementSibling;
      const secondChild = this.children[1]; 

        accordionHeadersWeb.forEach(otherItem =>{
          if(this != otherItem && otherItem.nextElementSibling.classList.contains('active')){
            otherItem.nextElementSibling.classList.remove('active')
            otherItem.children[1].textContent="+"
          }
        })
        secondChild.textContent=="+"
        ? secondChild.textContent= "-"
        :secondChild.textContent="+"
      item.classList.toggle('active');
    });
  });

    // Add event listeners for buttons
    document.getElementById("prev-web").addEventListener("click", () => {
      if (currentPageWeb > 1) {
        currentPageWeb--;
        renderProjectsWeb();
      }
    });

    document.getElementById("next-web").addEventListener("click", () => {
      if (currentPageWeb < totalPagesWeb) {
        currentPageWeb++;
        renderProjectsWeb();
      }
    });
  };

  renderProjectsWeb();
};

projectAddItemWeb();

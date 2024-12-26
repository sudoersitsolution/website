const projectAddItemWeb = () => {
  const projectsWeb= [
{title: "exam seating arrangement system",description: "to-do description"},
{title: "vu alumni-student connectbook",description:"to-do description"},
{title: "career counseling platform",description:"to-do description"},
{title: "mcq based test system for exam prepration",description:"to-do description"},
{title: "recipe finder application",description:"to-do description"},
{title: "Secure Voting System Using Blockchain",description:"to-do description"},
{title: "personalized nutrition and fitness management system",description:"to-do description"},
{title: "online tutor finding application",description:"to-do description"},
{title: "health tracker monitor and record health data",description:"to-do description"},
{title: "Online book exchange platform ",description:"to-do description"},
{title: "Online cosmetics store ",description:"to-do description"},
{title: "Online tourist guide",description:"to-do description"},
{title: "Expense tracker application",description:"to-do description"},
{title: "Stationary shop management system",description:"to-do description"},
{title: "Patient Record Management system",description:"to-do description"},
{title: "Advance attendence using QR code",description:"to-do description"},
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

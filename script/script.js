function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    var headerHeight = document.querySelector("header").offsetHeight;
    var sectionOffset = section.offsetTop - headerHeight;
    window.scrollTo({
      top: sectionOffset,
      behavior: "smooth",
    });
  }
}

// Add an event listener to prevent default behavior of anchor links
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("nav ul li a");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default behavior
      var targetId = link.getAttribute("href").substring(1); // Get target section ID
      scrollToSection(targetId); // Scroll to the section
    });
  });
});

//
// logic for change the bg color of the header when scroll start and change a color when scroll
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("scroll", function () {
    const scrollPercentage = document.documentElement.scrollTop;
    if (scrollPercentage < 5) {
      document.getElementsByTagName("header")[0].style.backgroundColor =
        "black";
    } else {
      document.getElementsByTagName("header")[0].style.backgroundColor =
        "#3c3c3c";
    }
    // console.log(scrollPercentage);

    if (scrollPercentage < 400) {
      // home
      document.getElementById("homeNvigation").style.color = "red";
      document.getElementById("aboutNvigation").style.color = "#ffff";
      document.getElementById("serviceNvigation").style.color = "#ffff";
      document.getElementById("protfolioNvigation").style.color = "#ffff";
      document.getElementById("contactNvigation").style.color = "#ffff";
      // console.log(document.getElementById("homeNvigation"));
    }

    if (scrollPercentage > 400 && scrollPercentage < 870) {
      document.getElementById("homeNvigation").style.color = "#ffff";
      document.getElementById("aboutNvigation").style.color = "red";
      document.getElementById("serviceNvigation").style.color = "#ffff";
      document.getElementById("protfolioNvigation").style.color = "#ffff";
      document.getElementById("contactNvigation").style.color = "#ffff";
    }
    if (scrollPercentage > 871 && scrollPercentage < 1403) {
      document.getElementById("homeNvigation").style.color = "#ffff";
      document.getElementById("aboutNvigation").style.color = "#ffff";
      document.getElementById("serviceNvigation").style.color = "red";
      document.getElementById("protfolioNvigation").style.color = "#ffff";
      document.getElementById("contactNvigation").style.color = "#ffff";
    }
    if (scrollPercentage > 1404 && scrollPercentage < 1800) {
      document.getElementById("homeNvigation").style.color = "#ffff";
      document.getElementById("aboutNvigation").style.color = "#ffff";
      document.getElementById("serviceNvigation").style.color = "#ffff";
      document.getElementById("protfolioNvigation").style.color = "red";
      document.getElementById("contactNvigation").style.color = "#ffff";
    }
    if (scrollPercentage > 1801 && scrollPercentage < 6000) {
      document.getElementById("homeNvigation").style.color = "#ffff";
      document.getElementById("aboutNvigation").style.color = "#ffff";
      document.getElementById("serviceNvigation").style.color = "#ffff";
      document.getElementById("protfolioNvigation").style.color = "#ffff";
      document.getElementById("contactNvigation").style.color = "red";
    }
  });
});

//logic for change the a tag coloer when user click in it
function navBarATagOnClick(e) {
  // let navBar = document.getElementsByTagName("nav")[0];
  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    // console.log(link.innerHTML);
    if (e.innerHTML === link.innerHTML) {
      link.style.color = "red"; // Reset to default color
    } else {
      link.style.color = "aliceblue";
    }
    // If you have other styles, reset them here too
  });
}

//liogic for show the  in info

function showMyInfo(route) {
  // console.log(route);
  let display = document.getElementById("displayMySelf");
  // console.log(display);
  display.classList.add("fade-out");

  setTimeout(() => {
    if (route === "Skills") {
      document.getElementById("displayMySelf").innerHTML = `
      <ul>
      <li>
        <h5 style="color: #e4dbdb">
          <strong class="mainSlikkMERNstack"> MERN Stack </strong
          >, Html, Css, JavaScript
        </h5>
      </li>
      <li>
        <h5>
          NextJs, Redux, Material UI,and other libraries for the
          frontend
        </h5>
      </li>
      <li>
        <h5>Typescript, Nestjs, SQL, Git, postman</h5>
      </li>
    </ul>
        `;
    } else if (route === "Experience") {
      document.getElementById("displayMySelf").innerHTML = `
      <ul>
      
  
      <li>
        <h5 style="">
          I may not have prior experience in web development, as I
          come from a different background. However, I have acquired
          the necessary technologies that are industry-tested and can
          confidently apply them
        </h5>
      </li>
     
    </ul>
      
      `;
    } else if (route === "Education") {
      document.getElementById("displayMySelf").innerHTML = `
      <ul>
     
      <li>
      <h5 style="">
          Bachelor of Technology in Electrical Engineering; MAKAUT,
          West Bengal(2020)
        </h5>
      </li>
      <li>
      <h5 style="">
          Completed a 6-month full-stack course on the MERN stack; 10X
          Academy(diploma)
        </h5>
      </li>
    </ul>
      
      `;
    }
    display.classList.remove("fade-out");
  }, 500);

  //make the change css of the list item wthe user click
  let listArray = document.querySelectorAll(".listofmyInfo ul li");
  listArray.forEach((item, i) => {
    if (item.innerHTML === route) {
      item.style.color = "aliceblue";
    } else item.style.color = "yellow";
  });
}

// logic for close the slider
function closeSlider() {
  let navelement = document.querySelector("header main nav");

  navelement.style.right = "-200px";
}

function openSlider() {
  let navelement = document.querySelector("header main nav");

  navelement.style.right = "0px";
}

//     from sumit
// function fromSubmit(e) {
//   e.preventDefault();
//   console.log("hdhdhhd");
// }

console.log(document.getElementsByClassName("form")[0]);

document.getElementsByClassName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("loader").style.display = "block";
  document.getElementsByClassName("form")[0].style.opacity = 0.1;

  const jsonData = {
    name: e.target.elements.name.value,
    email: e.target.elements.email.value,
    message: e.target.elements.message.value,
  };
  fetch("https://form-submit-ndey.onrender.com/", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("fromSubmitResponse").innerHTML =
        "submitted successfully, you will recived the mail ";
      e.target.elements.name.value = "";
      e.target.elements.email.value = "";
      e.target.elements.message.value = "";
    })
    .catch((err) => {
      console.log(err);

      document.getElementById("fromSubmitResponse").innerHTML =
        "Some Error!! not submitted";
    })
    .finally(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementsByClassName("form")[0].style.opacity = 1;
    });
});

///logic for add poject card in the web page

let projectData = [
  {
    extra: false,
    title: "Social app <br>(full-stack)",
    imageUrl: "hotailBookingApp.png",
    technologies:
      " Next.js, Redux Toolkit, Material-UI, Nest.js, MongoDB, and TypeScript.",
    githubFrontend: "https://github.com/royhirakp/hotel-booking-appp-nextjs",
    githubBackend: "https://github.com/royhirakp/hotel-Booking-backend-nestjs",
    hostingLink: "https://hotel-booking-appp-nextjs.vercel.app/webapp/Home",
  },
  {
    extra: false,
    title: "UI Layouts",
    imageUrl: "layoutproject1.png",
    technologies: "Next.js, , Material-UI, Tailwind css",
    githubFrontend: "https://github.com/royhirakp/layouts_main",
    // githubBackend: "https://github.com/royhirakp/hotel-Booking-backend-nestjs",
    hostingLink: "https://layouts-main.vercel.app/",
  },
  {
    extra: false,
    title: "Html Css Js",
    imageUrl: ".png",
    technologies: "Html, Css, Javascript",
    githubFrontend: "",
    // githubBackend: "https://github.com/royhirakp/hotel-Booking-backend-nestjs",
    hostingLink: "",
  },
];

let addProjectFunction = (item, i) => {
  console.log(item.extra, item.title);
  var newChild1 = document.createElement("div");
  newChild1.className = `card ${item.extra ? "extraProjectCard" : ""}`;
  newChild1.innerHTML = `
  <div class="content">
  <div class="back">
    <div class="back-content">
      <div
      class="projectBgImageContainer"
        style="
          background: url(photos/${item.imageUrl});
          background-repeat: no-repeat;
          background-size: cover;
          "
      >
        <h4>
          ${item.title}
       </h4>
      </div>
    </div>
  </div>
  <div class="front">

    <div class="frontContaint" >
      <p>
        <strong >Technologies:</strong>                
      </p>
      <p class="listOfTecnologies">
       ${item.technologies}
      </p>
      <div>
        <section class="projectLinks" >
          <div class="IconContainerr" >
            <img src="photos/github-142-svgrepo-com (1).svg" alt="" />
          </div>
          <div class="githublinkContainer" >
            <a style="display:${
              item.githubFrontend ? "block" : "none"
            }" target="_blank" 
            href="${item.githubFrontend}" 
              title="github link for frontend">
             Ui
            </a>
            <a  target="_blank"
            
            style="display:${item.githubBackend ? "block" : "none"}"
            
            
            href="${item.githubBackend}" title="github link for backend">
              Backend
            </a>
          </div>                
        </section>              
      </div>
      <a  target="_blank" href="${item.hostingLink}" class="projectDeployLink" >
        Deploy link
      </a>
    </div>
  </div>
</div>
  
  `;
  parentDiv.appendChild(newChild1);
};
var parentDiv = document.querySelector(".protpolioCradContainer");

projectData.map(addProjectFunction);

//see more button logic
let extraProjectData = [
  {
    extra: true,
    title: "extraaa",
    imageUrl: ".png",
    technologies: " Html cSS JS",
    githubFrontend: "",
    githubBackend: "",
    hostingLink: "",
  },
  {
    extra: true,
    title: "extraaa",
    imageUrl: ".png",
    technologies: " Html cSS JS",
    githubFrontend: "",
    githubBackend: "",
    hostingLink: "",
  },
];

extraProjectData.map(addProjectFunction);
let seeMoreButton = document.getElementById("seeMoreButton");
let buttonStatus = false;

seeMoreButton.addEventListener("click", () => {
  var divsToToggle = document.querySelectorAll(".extraProjectCard");
  console.log(divsToToggle);

  if (!buttonStatus) {
    seeMoreButton.innerHTML = `See less`;
    buttonStatus = true;
    divsToToggle.forEach(function (div) {
      div.style.display = "block";
    });
  } else {
    seeMoreButton.innerHTML = `See more`;
    buttonStatus = false;
    divsToToggle.forEach(function (div) {
      div.style.display = "none";
    });
  }
});

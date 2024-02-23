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

// console.log(document.getElementsByClassName("form")[0]);

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
  //html projects

  {
    extra: false,
    title: "FULLSTACK | Shopping app | Next js, Nestjs, redux, Material ui  ",
    imageUrl: "hotailBookingApp.png",
    technologies:
      " Next.js, Redux Toolkit, Material-UI, Nest.js, MongoDB, and TypeScript.",
    githubFrontend: "https://github.com/royhirakp/hotel-booking-appp-nextjs",
    githubBackend: "https://github.com/royhirakp/hotel-Booking-backend-nestjs",
    hostingLink: "https://hotel-booking-appp-nextjs.vercel.app/login",
  },
  {
    extra: false,
    title: "Layouts | Different types of responsive layout design",
    imageUrl: "layoutproject1.png",
    technologies:
      "Next.js,TypeScript, Material-UI , Tailwind css, swiper, react-hook-form",
    githubFrontend: "https://github.com/royhirakp/layouts_main",
    // githubBackend: "https://github.com/royhirakp/hotel-Booking-backend-nestjs",
    hostingLink: "https://layouts-main.vercel.app/",
  },
  {
    extra: false,
    title:
      "NextJs, redux-persist | added product remains in cart after page refresh",
    imageUrl: "react_redux_data_shw_after_refresh.png",
    technologies: "Next js, redux-persist",
    githubFrontend: "https://github.com/royhirakp/nextJs-redux-shoping-cart",
    hostingLink: "https://superlative-mooncake-bee048.netlify.app/",
  },
];

let addProjectFunction = (item, i) => {
  // console.log(item.extra, item.title);
  var newChild1 = document.createElement("div");
  newChild1.className = `card ${item.extra ? "extraProjectCard" : ""}`;
  newChild1.innerHTML = `
  <div class="content">
  <div class="back">
    <div class="back-content">
      <div
      class="projectBgImageContainer"
        style="
          background: url(photos/${item.imageUrl}) center;
          background-repeat: no-repeat;
          background-size: cover;
          "
      >
        <h4 style="text-align: center;" >
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
  //react projects
  {
    extra: true,
    title: "FULLSTACK | Book app | api call by redux RTK query | auth",
    imageUrl: "react_redux_query.png",
    technologies:
      "REACT, Redux query, Mui, Express js,  mongoose, Jwt , bcrypt ",
    githubBackend:
      "https://github.com/royhirakp/EXPRESS_book_app_CURD_redux_query/tree/main",

    githubFrontend:
      "https://github.com/royhirakp/REACT_book_app_CURD_redux_query",
    hostingLink: "https://amazing-malasada-10601f.netlify.app/",
  },
  // {
  //   extra: true,
  //   title: "React task manager1 (full stack)",
  //   imageUrl: "blog_post_react_multer.png",
  //   technologies: "REACT, Express js, mongoose, Jwt, bcrypt, multer ",
  //   githubBackend: "https://github.com/royhirakp/EXPRESS_Blog_app_multer_curd",
  //   githubFrontend: "https://github.com/royhirakp/REACT_Blog_app_multer_curd",
  //   hostingLink: "https://main--exquisite-gelato-aa5fe0.netlify.app/",
  // },
  {
    extra: true,
    title: "BACKEND | Task manager | auth, CURD in NoSQL Database",
    imageUrl: "taskManagerReact.png",
    technologies: "REACT, Mui, Express js, mongoose, Jwt, bcrypt",
    githubBackend: "https://github.com/royhirakp/Task-Manager-NODEJS",

    githubFrontend: "https://github.com/royhirakp/taskManager-react",
    hostingLink: "https://sweet-vacherin-ba29c3.netlify.app/",
  },

  {
    extra: true,
    title: "BACKEND | React recipe app | auth, multer upload | filter data",
    imageUrl: "recipi.png",
    technologies: "REACT, Mui, Express js, Multer, mongoose, Jwt, bcrypt ",
    githubBackend:
      "https://github.com/royhirakp/Express_resipiapp_multer_CURD_auth",

    githubFrontend:
      "https://github.com/royhirakp/react_resipiapp_multer_CURD_auth",
    hostingLink: "https://venerable-tiramisu-af3c86.netlify.app/",
  },
  {
    extra: true,
    title:
      "React MUSIC APP | play, pause  | volume up, down | next, prev song | click to play",
    imageUrl: "musicapp_react.png",
    technologies: "REACT",
    githubFrontend: "https://github.com/royhirakp/musicAPP",
    hostingLink: "https://resonant-melomakarona-7d9007.netlify.app/",
  },
  {
    extra: true,
    title: "Integration | React movie search app | get data from a api",
    imageUrl: "movieSearch_react.png",
    technologies: "React, external api",
    githubFrontend: "https://github.com/royhirakp/REACT_movieSearch_app",
    hostingLink: "https://main--gorgeous-maamoul-3d7bcf.netlify.app/",
  },
  {
    extra: true,
    title: "Javascript Logic | Weight converter | HTML CSS JS ",
    imageUrl: "waight_converter.png",
    technologies: "HTML, CSS , Javascript",
    githubFrontend: "https://github.com/royhirakp/HTML_weight_converter",
    hostingLink: "https://royhirakp.github.io/HTML_weight_converter/",
  },
  {
    extra: true,
    title: "Javascript Logic | Stopwatch  | HTML CSS JS ",
    imageUrl: "stopwatch.png",
    technologies: "HTML, CSS , Javascript",
    githubFrontend: "https://github.com/royhirakp/HTML_css_js_stopwatch",
    hostingLink: "https://royhirakp.github.io/HTML_css_js_stopwatch/",
  },
  {
    extra: true,
    title: "Javascript Logic | Calculator | HTML CSS JAVASCRIPT",
    imageUrl: "calculator.png",
    technologies: "HTML, CSS , JAVASCRIPT",
    githubFrontend: "https://github.com/royhirakp/HTML_css_js_Calculator",
    hostingLink: "https://royhirakp.github.io/HTML_css_js_Calculator/",
  },
  {
    extra: true,
    title: "Design | HTML CSS responsive product card",
    imageUrl: "htmlCardDesing.png",
    technologies: "HTML, CSS",
    githubFrontend:
      "https://github.com/royhirakp/html_css_responsive_exampleCard/",
    hostingLink: "https://royhirakp.github.io/html_css_responsive_exampleCard/",
  },
  {
    extra: true,
    title: "Design | HTML CSS responsive design",
    imageUrl: "htmlCssPageDesing.png",
    technologies: "HTML, CSS",
    githubFrontend: "https://github.com/royhirakp/HTML_CSS_responsive_Desing",
    hostingLink: "https://royhirakp.github.io/HTML_CSS_responsive_Desing/",
  },
  // {
  //   extra: true,
  //   title: "HTML Bootstrap form design",
  //   imageUrl: "bootstarpFromdesing.png",
  //   technologies: "HTML, Bootstrap",
  //   githubFrontend: "https://github.com/royhirakp/html_bootstrap_form_Desing",
  //   hostingLink: "https://royhirakp.github.io/html_bootstrap_form_Desing/",
  // },
  {
    extra: true,
    title: "Design | HTML CSS responsive form design",
    imageUrl: "htmlFormDesing.png",
    technologies: "HTML, CSS",
    githubFrontend:
      "https://github.com/royhirakp/HTML_Form_card_responsive_desing",
    hostingLink:
      "https://royhirakp.github.io/HTML_Form_card_responsive_desing/",
  },

  {
    extra: true,
    title: "Design | Payment process by javascript logic | HTML CSS JS",
    imageUrl: "payment_process_card.png",
    technologies: "HTML, CSS ,Javascript",
    githubFrontend:
      "https://github.com/royhirakp/HTML_css_payment_process_by_js",
    hostingLink: "https://royhirakp.github.io/HTML_css_payment_process_by_js/",
  },

  {
    extra: true,
    title: "Integration | Jocks app | get data from a api, bookmark data",
    imageUrl: "jocksapp.png",
    technologies: "React",
    githubFrontend: "https://github.com/royhirakp/jokesAppReact",
    hostingLink: "https://dancing-bombolone-589bb2.netlify.app/",
  },
  {
    extra: true,
    title: "Features | React drag and drop",
    imageUrl: "drag_and_drop.png",
    technologies: "REACT",
    githubFrontend: "https://github.com/royhirakp/REACT__drag_drop_component",
    hostingLink: "https://papaya-scone-d901b5.netlify.app/",
  },

  {
    extra: true,
    title: "Features | Multi step form by react, redux",
    imageUrl: "multistep_form.png",
    technologies: " React , Redux, Material ui",
    githubFrontend:
      "https://github.com/royhirakp/multistepForm-redux-metarialUI",
    hostingLink: "https://delicate-rabanadas-e32f8c.netlify.app/",
  },
  {
    extra: true,
    title: "Features | React color change on button click ",
    imageUrl: "react_colorChage_on_buttonClick.png",
    technologies: "React",
    githubFrontend:
      "https://github.com/royhirakp/REACT_colorChange_by_buttonClick/tree/main",
    hostingLink: "https://main--polite-blancmange-d54727.netlify.app/",
  },
  //html css projects
  {
    extra: true,
    title:
      "Features | Drag, resize, change background color | HTML CSS JAVASCRIPT",
    imageUrl: "drag_resize_div.png",
    technologies: "HTML, CSS , JAVASCRIPT",
    githubFrontend: "https://github.com/royhirakp/HTML_CSS_JS_Drag_resize_div",
    hostingLink: "https://royhirakp.github.io/HTML_CSS_JS_Drag_resize_div/",
  },
  {
    extra: true,
    title:
      "Features | Color picker, preview upload image | HTML CSS JAVASCRIPT",
    imageUrl: "colorPicker.png",
    technologies: "HTML, CSS , JAVASCRIPT",
    githubFrontend:
      "https://github.com/royhirakp/HTML_CSS_JS_colorPicker_dispayimge",
    hostingLink:
      "https://royhirakp.github.io/HTML_CSS_JS_colorPicker_dispayimge/",
  },
];

extraProjectData.map(addProjectFunction);
let seeMoreButton = document.getElementById("seeMoreButton");
let buttonStatus = false;

seeMoreButton.addEventListener("click", () => {
  var divsToToggle = document.querySelectorAll(".extraProjectCard");
  // console.log(divsToToggle);

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

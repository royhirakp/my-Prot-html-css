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
  // console.log("submiteddd", e);
  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  fetch("")
    .then((res) => res)
    .then((data) => {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      console.log(data);
    })
    .catch((err) => {
      console.log("errrrr===", err);
    });
});

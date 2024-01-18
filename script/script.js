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
    console.log(scrollPercentage);

    if (scrollPercentage < 300) {
      // home
      document.getElementById("homeNvigation").style.color = "red";
      document.getElementById("aboutNvigation").style.color = "#ffff";
      document.getElementById("serviceNvigation").style.color = "#ffff";
      document.getElementById("protfolioNvigation").style.color = "#ffff";
      document.getElementById("contactNvigation").style.color = "#ffff";

      // console.log(document.getElementById("homeNvigation"));
    }

    if (scrollPercentage > 300 && scrollPercentage < 750) {
      document.getElementById("homeNvigation").style.color = "#ffff";
      document.getElementById("aboutNvigation").style.color = "red";
      document.getElementById("serviceNvigation").style.color = "#ffff";
      document.getElementById("protfolioNvigation").style.color = "#ffff";
      document.getElementById("contactNvigation").style.color = "#ffff";
    }
    if (scrollPercentage > 750 && scrollPercentage < 1090) {
      document.getElementById("homeNvigation").style.color = "#ffff";
      document.getElementById("aboutNvigation").style.color = "#ffff";
      document.getElementById("serviceNvigation").style.color = "red";
      document.getElementById("protfolioNvigation").style.color = "#ffff";
      document.getElementById("contactNvigation").style.color = "#ffff";
    }
    if (scrollPercentage > 1090 && scrollPercentage < 1147) {
      document.getElementById("homeNvigation").style.color = "#ffff";
      document.getElementById("aboutNvigation").style.color = "#ffff";
      document.getElementById("serviceNvigation").style.color = "#ffff";
      document.getElementById("protfolioNvigation").style.color = "red";
      document.getElementById("contactNvigation").style.color = "#ffff";
    }
    if (scrollPercentage > 1147 && scrollPercentage < 2000) {
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
        <h5 style="width:464px;">
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
      <h5 style="width:464px;">
          Bachelor of Technology in Electrical Engineering; MAKAUT,
          West Bengal(2020)
        </h5>
      </li>
      <li>
      <h5 style="width:464px;">
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

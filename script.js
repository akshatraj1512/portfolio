function sendMail(params){
    var tempParams = {
        fromName: document.getElementById("fromName").value,
        emailSender: document.getElementById("emailSender").value,
        subjectSender: document.getElementById("subjectSender").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_d1q7cwa','template_q6cn22h',tempParams)
     .then(function(res){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mail Sent Successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
     });
}

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Web Development","Technical Writing","Web3","Art"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
        
    });
    var typed = new Typed(".typing-2",{
        strings: ["Web Development","Technical Writing","Web3","Art"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

     // Scroll to top button script
      const btnScrollToTop = document.querySelector("#btnScrollToTop");

      btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });

    // Dark Mode Toggle Script
const darkModeIcon = document.getElementById("darkModeIcon");

darkModeIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle dark mode for other sections
  document.querySelector(".navbar").classList.toggle("dark-mode");
  document.querySelectorAll(".menu li a").forEach((item) => {
    item.classList.toggle("dark-mode");
  });
  document.querySelector(".about").classList.toggle("dark-mode");
  document.querySelector(".services").classList.toggle("dark-mode");
  document.querySelector(".skills").classList.toggle("dark-mode");
  document.querySelector(".contact").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");

  // Update Text Styles
  document.querySelectorAll(".text-1, .text-2, .text-3 span, .paragraph-3, .info .head, .info .sub-title").forEach((item) => {
    item.classList.toggle("dark-mode");
  });

  // Switch Icon
  if (darkModeIcon.textContent === "dark_mode") {
    darkModeIcon.textContent = "light_mode";
  } else {
    darkModeIcon.textContent = "dark_mode";
  }
});

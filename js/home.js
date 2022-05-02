
"use strict";
$(document).ready(() => {

//  slide_show
  var counter = 1;
  //array for Slide Show Text
  var slide_show_text = [];
  slide_show_text[1] =  "<p><span>Yoga to Build Resilience</span></p>";
  slide_show_text[2] =  "<p><span>Embrace your edge</span></p>";
  slide_show_text[3] =  "<p><span>Rise and Shine</span></p>";
  

  //function
  var slide_show = function () {
    if (counter < 3) {
      counter++;
    } else {
      counter = 1;
    }

    //change the slides
    $("#Banner_slide").fadeOut("300", function () {
      $(this).css(
        "background-image",
        "url('images/hero-0" + counter + ".jpg')"
      );
      $(this).fadeIn();
    });
   
    $("#banner_context").fadeOut("300", function () {
      $(this).html(slide_show_text[counter]);
      $(this).fadeIn();
    });
  };
  //change the slide after 4seconds
  setInterval(slide_show, 4000);

  
  // About us
  $("#abt_img_list a").each((index, link) => {
    const image = new Image();
    image.src = link.href;
  });
  
  $("#abt_img_list a").click((evt) => {
    
const link = evt.currentTarget;
    $("#about_us_image").attr("src", link.href); 
    evt.preventDefault(); 
  });
  // move focus to first thumbnail
  $("li:first-child a").focus();



// Membership
  var offerValid = new Date("Dec 31, 2021 24:00:00").getTime();

 
  var interval = setInterval(function() {
  
    // Get todays date and time
    var currentDate = new Date().getTime();
  
    var timeLeft = offerValid - currentDate;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("time-left").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, some text is displayed
    if (timeLeft < 0) {
      clearInterval(interval);
      document.getElementById("time-left").innerHTML = "EXPIRED";
    }
  }, 1000);




  

// newsletter

  const newsBtn = $(".btn-news");
  //click event of the Submit Button 
  $(newsBtn).click(function (evt) {

    
    const emailNews = $("#email_news").val();
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    if (emailNews == "" || !emailPattern.test(emailNews)) {
      //display an error message if validation fails
      alert("Enter a Valid Email Address.");
    } else {
      
      $("#pop-email").text(emailNews);  
      $("#popup").css("display", "block");
    }

    evt.preventDefault();
  });
  const closePopup = $("#close");
  $(closePopup).click(function (evt) {
    $("#popup").css("display", "none");
    evt.preventDefault();
  });


  // clock and date in footer

  //Using the Date object get the Date and Time 
  function showTime() {
    var date = new Date();
    var h = date.getHours(); // 
    var m = date.getMinutes(); // 
    var s = date.getSeconds(); // 
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock_display").innerText = time;
    document.getElementById("clock_display").textContent = time;

    setTimeout(showTime, 1000);
  }

  showTime();

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = dd + "-" + mm + "-" + yyyy;

  document.getElementById("date_display").innerHTML = today;

  



}); 



"use strict";
$(document).ready(() => {



  const event_galleryItems = document.querySelector(".tab-event_gallery").children;   
  const itemsPerPage = 5;  //User defined value - how many images you want to have on the page
  const totalPages = Math.ceil(event_galleryItems.length / itemsPerPage);  
  const pageAttribute = "data-page";  

  //This Function will create the anchor Tags 
  function setPagination(currentPage) {
    for (let i = 1; i <= totalPages; i++) {
      var pager = "";

      if (currentPage == i) {
        pager = $(
          '<a href="javascript:void(0);" class="active pagination-link" ' +
            pageAttribute +
            '="' +  
            i +
            '"></a>'
        );
      } else {
        pager = $(
          '<a href="javascript:void(0);" class="pagination-link" ' +
            pageAttribute +
            '="' +
            i +
            '"></a>'
        );
      }

      //Set the Page Number 1,2,3 etc
      pager.html(i);
      pager.click(function () {
        $(".pagination-link").removeClass("active");
        $(this).addClass("active");
        var page = $(this).attr(pageAttribute);
        showItems(page);
      });

      pager.appendTo($(".pagination"));
    }
  }

  // Function will show the items on the page when any anchor tag is clicked
  function showItems(currentPage) {
    for (let i = 0; i < event_galleryItems.length; i++) {
      event_galleryItems[i].classList.remove("show");
      event_galleryItems[i].classList.add("hide");

      if (
        i >= currentPage * itemsPerPage - itemsPerPage &&
        i < currentPage * itemsPerPage
      ) {
        event_galleryItems[i].classList.remove("hide");
        event_galleryItems[i].classList.add("show");
      }
    }
  }

  setPagination(1);

  
  showItems(1);
});

// Product details Carousel
$(function () {
  $('.details-img').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: $('.caro-btn_1'),
    prevArrow: $('.caro-btn_2'),
    dots: false,
    infinite: false,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// reset button appear bottom
jQuery(".group_icon").clone().prependTo("#trending .modal-body");
jQuery(".top_feeds").clone().prependTo("#top_feed .modal-body");
jQuery('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    responsiveClass: true,
    dots: false,
    responsive: {
        0: {
            items: 3,
            nav: true,
        },
        600: {
            items: 5,
            nav: true,
        },
        1000: {
            items: 6,
            nav: true,
            loop: false,
        },
        1480: {
            items: 7,
            nav: true,
            loop: false,
        }
    }
});


// ------------------------------------

jQuery(function () {
  jQuery('[data-toggle="popover"]').popover()
});
jQuery('#user-comment-buttons').click(function () {
  jQuery("#boxsearch").focus();
});
jQuery(".black_theme").click(function () {
  jQuery('body').toggleClass("black");
});


// -----------------------------------

function openNav() {
  document.getElementById("mySidebar").style.width = "115px";
  document.getElementById("main").style.marginLeft = "115px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// -----------------------

jQuery(document).ready(function () {
  if (window.File && window.FileList && window.FileReader) {
      jQuery("#multiple_files").on("change", function (e) {
          var multiple_files = e.target.files,
              filesLength = multiple_files.length;
          for (var i = 0; i < filesLength; i++) {
              var f = multiple_files[i]
              var fileReader = new FileReader();
              fileReader.onload = (function (e) {
                  var file = e.target;
                  jQuery("<span class=\"pip\">" +
                      "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
                      "<br/><span class=\"img-delete\">Remove</span>" +
                      "</span>").insertAfter("#multiple_files");
                  jQuery(".img-delete").click(function () {
                      jQuery(this).parent(".pip").remove();
                  });
              });
              fileReader.readAsDataURL(f);
          }
      });
  } else {
      alert("|Sorry, | Your browser doesn't support to File API")
  }
});
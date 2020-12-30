/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll

function collapseNavbar() {
    // if ($(".navbar").offset().top > 50) {
    //     $(".navbar-fixed-top").addClass("top-nav-collapse");
    // } else {
    //     $(".navbar-fixed-top").removeClass("top-nav-collapse");
    // }
}
function adjustBackgroundImage() {
    // var w = $(window).width(), h=$(window).height();
    // var url = $('body').css("background").split('"')[1];
    // var $i = $('<img src="'+url+'" />');
    // var nW = $i[0].naturalWidth, nH = $i[0].naturalHeight;
    // if (h > w) {
    //     $("body").css({"background-size":((nW/nH)*h)+"px "+h+"px"});    
    // } else {
    //     $("body").css({"background-size":w+"px "+((nH/nW)*w)+"px"});    
    // }
    
}
$(window).resize(function() {
    adjustBackgroundImage();
});
$(document).ready(function() {
    adjustBackgroundImage();
});
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
// if (google) {
//     google.maps.event.addDomListener(window, 'load', init);
//     google.maps.event.addDomListener(window, 'resize', function() {
//         map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
//     });
    
// }

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
// $(window).on('load', function() {
//     $('div.ytp-title-text').css({"visibility":"hidden"});
// });
$("#thankyouButton").on('click', function() {
    $("#thankyou_message").addClass("d_none");
    $(".form_data div input").val("");
    $(".form_data div textarea").val("");
    $(".form_data div select").val("none");
});
$("#clientInfo").on('click', function() {
    var result = true;
    $('input,textarea,select').filter('[required]:visible').each(function() {
        if ($(this).val() == "" || $(this).val() == "none" ) {result = false}
    });
    if (result) {
        setTimeout(function(){
            $("#thankyou_message").removeClass("d_none");
        },500);    
    }
});
$('#show_type').change(function() {
    if ($(this).val() == "other") {
        $("#showOther").removeClass("d_none");
    } else {
        $("#showOther").addClass("d_none");
    }
});
(function() {
  function validEmail(email) { // see:
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  function validateHuman(honeypot) {
    if (honeypot) {  //if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  }

  // get all data in form and return object
  function getFormData() {
    var form = document.getElementById("gform");
    var elements = form.elements;

    var fields = Object.keys(elements).filter(function(k) {
          return (elements[k].name !== "honeypot");
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    console.log(formData);
    return formData;
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var data = getFormData();         // get the values submitted in the form

    /* OPTION: Remove this comment to enable SPAM prevention, see README.md
    if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
      return false;
    }
    */

    if( data.email && !validEmail(data.email) ) {   // if email is not valid show error
      var invalidEmail = document.getElementById("email-invalid");
      if (invalidEmail) {
        invalidEmail.style.display = "block";
        return false;
      }
    } else {
      disableAllButtons(event.target);
      var url = event.target.action;  //
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          console.log( xhr.status, xhr.statusText )
          console.log(xhr.responseText);
          // document.getElementById("gform").style.display = "none";  // hide form
          var thankYouMessage = document.getElementById("thankyou_message");
          if (thankYouMessage) {
            // thankYouMessage.style.display = "block";
            // $("#thankyou_message").removeClass("d_none");
          }
          return;
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
      }).join('&')
      xhr.send(encoded);
    }
  }
  function loaded() {
    console.log("Contact form submission handler loaded successfully.");
    // bind to the submit event of our form
    var form = document.getElementById("gform");
    form.addEventListener("submit", handleFormSubmit, false);
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
$('input[name="event_date"]').click(function() {
    if ($('#calendar-app').hasClass("d_none")) {$('#calendar-app').removeClass("d_none")} else {$('#calendar-app').addClass("d_none")}
});
$('.cview--date').on('click', function() {
    var d = new Date($(this).attr("data-date"));
    $('input[name="event_date"]').val(weekdaynumtotext[d.getDay()] + " " + monthnumtotext[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear());
    $('#calendar-app').addClass("d_none");
});
var weekdaynumtotext = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthnumtotext = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
function CreateEventJson() {
    if (!$('input[name="city"]').val() == "") {
        var json = {}, ival = $('textarea[name="event_json"]').val();
        var sep = (ival === "") ? "" : ",";
        json["name"] = $('input[name="event_name"]').val();
        json["city"] = $('input[name="city"]').val();
        // json["date"] = new Date($('input[name="event_date"]').val());
        json["date"] = $('input[name="event_date"]').val().split(" ");
        json["date"][1] = new Date($('input[name="event_date"]').val()).getMonth();
        json["time"] = $('input[name="hh"]').val() + ":" + $('input[name="mm"]').val(); + " " + $('input[name="am_pm"]').val();
        json["booking_url"] = $('input[name="booking_url"]').val();
        $('textarea[name="event_json"]').val(ival + sep + JSON.stringify(json));
    }
}
function RemoveInputValues() {
    $('#e_input div input').val("");
    $('#e_input div div input').val("");
}
$('#addMoreDiv').on('click', function() {
    CreateEventJson();
    RemoveInputValues();
    $('textarea[name="event_json"]').removeClass("d_none");
});
$('#generateJson').on('click', function() {
    CreateEventJson();
    $('textarea[name="event_json"]').removeClass("d_none");
    $('#formButton').removeClass("d_none");
});
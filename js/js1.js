/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
var weekdaynumtotext = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthnumtotext = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
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

$("#thankyouButton").on('click', function() {
    $("#thankyou_message").addClass("d_none");
    $(".form_data div input").val("");
    $(".form_data div textarea").val("");
    $(".form_data div select").val("none");
});
$("#thankyouButton1").on('click', function() {
    $("#thankyou_message1").addClass("d_none");
    $("#gform1 .form_data div input").val("");
    $("#gform1 .form_data div textarea").val("");
    $("#gform1 .form_data div select").val("none");
});
$("#clientInfo,#audienceInfo").on('click', function() {
    // $(this).attr("id","gform");
    if ($(this).attr("data-id") == "audience") {
        $('form[data-id="client"]').attr("id","xclude");
        $('form[data-id="audience"]').attr("id","gform");
    } else {
        $('form[data-id="audience"]').attr("id","xclude");
        $('form[data-id="client"]').attr("id","gform");
    }
    var result = true;
    if ($(this).attr("id") == "audienceInfo1") {
      $('#gform1 div div input,#gform1 div div textarea,#gform1 div div select').filter('[required]:visible').each(function() {
        if ($(this).val() == "" || $(this).val() == "none" ) {result = false;}
      });
    } else {
      $('#gform div div input,#gform div div textarea,#gform div div select').filter('[required]:visible').each(function() {
        if ($(this).val() == "" || $(this).val() == "none" ) {result = false;}
      });  
    }
    
    if (result) {
        $('#clientFormAlert').addClass("d_none");
        setTimeout(function(){
            $("#thankyou_message").removeClass("d_none");
        },500);    
    } else {
        $('#clientFormAlert').removeClass("d_none");
        // return;
    }
});
$('#audienceInfo1').on('click', function() {
    var result = true;
    $('#gform1 div div input,#gform1 div div textarea,#gform1 div div select').filter('[required]:visible').each(function() {
      if ($(this).val() == "" || $(this).val() == "none" ) {result = false;}
    });
    if (result) {
        $('#clientFormAlert').addClass("d_none");
        setTimeout(function(){
            $("#thankyou_message1").removeClass("d_none");
        },500);    
    } else {
        $('#clientFormAlert1').removeClass("d_none");
        // return;
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
  function getFormData1() {
    var form = document.getElementById("gform1");
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
  function handleFormSubmit1(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var data = getFormData1();         // get the values submitted in the form

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
    var formXclude = document.getElementById("xclude");
    var form1 = document.getElementById("gform1");
    if (form) {
      form.addEventListener("submit", handleFormSubmit, false);  
    }
    if (formXclude) {
      formXclude.addEventListener("submit", handleFormSubmit, false);  
    }
    if (form1) {
      form1.addEventListener("submit", handleFormSubmit1, false);  
    }
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
$('.close_button').on('click', function() {
  var elem_target = $(this).attr("data-target");
  $('#'+elem_target).hide("fast", "linear", function() {
    $('.show_button').css({"display":"block"});
  });  
});
$('.show_button').on('click', function() {
  var elem_target = $(this).attr("data-target");
  $('#'+elem_target).show("fast", "linear", function() {
    $('.show_button').css({"display":"none"});
  });
});

$(window).resize(function() {
    var content_height = 0;
    for(var i=0;i<$('.frame_box').length; i++) {
        content_height = content_height+ $('.frame_box')[i].scrollHeight;
    }
    // console.log("content height"); console.log(content_height);
    // console.log("window height"); console.log($(window).height());
    if (content_height > ($(window).height() - 270) ) {
        $('#frame_box_main').css({"overflow-y":"scroll"});
    } else {
        $('#frame_box_main').css({"overflow-y":"hidden"});
    }
});
$('.img_download').on('mouseover', function() {
  $(this).find(">:first-child").removeClass("d_none");
});
$('.img_download').on('mouseout', function() {
  $(this).find(">:first-child").addClass("d_none");
});

function readTextFile(file)
{
  try {
    $('#frame_box_main').addClass("scrollbar")
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                get_event_summary(allText);
            }
        }
    }
    rawFile.send(null); 
  } catch (err) {
    $('#frame_box_main').removeClass("scrollbar")
    $('#frame_box_main').append($no_event_box);
  }
}

function get_event_summary(str_eventlist) {
	arr_events = JSON.parse(str_eventlist);
	arr_events.forEach( function(elem) {
		arr_event_date = elem["date"];
    arr_event_date[1] = Number(arr_event_date[1]);
    arr_event_date[2] = Number(arr_event_date[2]);
    arr_event_date[3] = Number(arr_event_date[3]);
		date_current = new Date();
		if ( (arr_event_date[3] > date_current.getFullYear())|| (arr_event_date[3] >= date_current.getFullYear() && ( ( arr_event_date[1] > date_current.getMonth() ) || (arr_event_date[1] == date_current.getMonth() && arr_event_date[2] >= date_current.getDate()) ) ) ) {
			append_event(elem);
		}
	});
}

function append_event(elem) {
	var str_href = (elem["booking_url"].length) ? elem["booking_url"].toString() : '#';
	$frame_box_event = $(`
		<div class="frame_box bg_black_trs">
            <p class="frame_box_info">`+elem["city"]+`</p>
            <p class="frame_box_info">`+elem["date"][0]+`, `+ elem["date"][2]  + ` `  + monthnumtotext[elem["date"][1]] + `</p>
            <p class="frame_box_info"><a href="`+ str_href +`" class="booking_link" target="_blank"><span>BOOK NOW</span></a></p>
        </div>
	`);
	$('#frame_box_main').append($frame_box_event);
}

$(document).ready(function() {
    adjustBackgroundImage();
    readTextFile('/events/events.txt')
});

$no_event_box = $(`
    <div class="frame_box bg_black_trs">
        <p class="frame_box_info">`+"Events coming soon!"+`</p>
    </div>
`);
$(".mobile_menu").click(function() {
    $(".primary_nav").slideToggle();
});


$(".list_item.services").click(function(){
	$(".dropdown_container").slideToggle();
});


$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".header").addClass("sticky");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("sticky");
    }
});

// On scroll transition/ animation
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '80%'
        });
  });
}

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );


// FORM JS

$(function() {
  $("form[name='contactForm']").validate({

    rules: {
      title: "required",
      first_name: "required",
      last_name: "required",
      phone: "required",
      country: "required",
      message: "required",
      email: {
        required: true,      
        email: true
      }
    },
   
    messages: {
      title: "This field is required.",
      first_name: "Please enter your first name.",
      last_name: "Please enter your last name.",
      email: "Please enter a valid email address",
      phone: "Please enter a valid phone number",
      country: "This field is required",
      message: "Please enter your message."
    },
   
    submitHandler: function(form) {
      form.submit();
    }
  });
});


// Owl slideshow 

// Service carousel
$('.service_slideshow').owlCarousel({
  loop:true,
  autoWidth:true,
  items:2,
  nav: true,
  navSpeed: 1800,
  mouseDrag: true,
  dots: false,
  autoplay: true,
  responsive:{
    0:{
        items:1,
        autoWidth:false,
    },
    600:{
        items:1,
        autoWidth:false
    },
    1000:{
        items:2
    }
  }
});

// Homepage slideshow
$('.banner_slideshow').owlCarousel({
  loop:true,
  items:1,
  nav: false,
  mouseDrag: true,
  dots: true, 
  autoplay: true,
  autoplaySpeed: 1200,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  dotsSpeed: 1200 
});
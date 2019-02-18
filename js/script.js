  $(document).ready(function(){


$('.slider').slick({
  infinite: true,
  slidesToShow: 4, 
  slidesToScroll: 1,
  dots: true,
    responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1035,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 745,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('.wrap-img').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  dots:true,

dotsClass:'slick-dots2'

});





  






       });


       $(document).ready(function(){
        $('.right_block ').click(function(){
         $('.bg-section-3').addClass('snow-color')
         $('.wrap-mini').addClass('hide')
         $('.bg-section-3-double').removeClass('hide')
         $('.left_block').removeClass('color-blue')
         $(".right_block").addClass('color-blue')
        $('.right_block .line').removeClass('hide')
        $('.left_block .line').addClass('hide')
         ;
    
        })
        $('.left_block').click(function(){
          $('.bg-section-3').removeClass('snow-color')
          $('.bg-section-3-double').addClass('hide')
          $('.wrap-mini').removeClass('hide')
          $(".right_block").removeClass('color-blue')
          $('.left_block').addClass('color-blue')
          $('.right_block .line').addClass('hide')
          $('.left_block .line').removeClass('hide')
          ;
     
         })
  
        })
 
$(document).ready(function(){
    // var headerUrl        = "./snippets/header.html";
    // var sliderUrl        = "./snippets/slider.html";
    // var categoryUrl      = "./snippets/category.html";
    // var handbookUrl      = "./snippets/handbook.html";
    // var footerUrl        = "./snippets/footer.html";


    // //function for insert innerHTML for 'select'
    // var insertHtml = function (selector, html_url){
    //     $(selector).load(html_url); 
    //  }
    // //include header
    // insertHtml(".nav-header", headerUrl);
    // //include slider
    // insertHtml(".sliderHeader", sliderUrl);
    // //include category
    // insertHtml(".category", categoryUrl);
    // // include handbook
    // insertHtml(".handbook", handbookUrl);
    // // include footer
    // insertHtml(".footer", footerUrl);
    // // //load index page when click logo
    // $(".logo").click(function(){
    //   insertHtml(".content", startUrl);
    // });

    // $("#register").click(function(){
    //   showLoading(".content");
    //   insertHtml(".content", registerHtmlUrl);
    //   return false;
    // });

    // $("#tasklists").click(function(){
    //   insertHtml(".content",loadingUrl);
    // });

    // $("#login").click(function(){
    //   insertHtml(".content", loginUrl);
    // });
    // function Redirect() {
    //     window.location="http://www.vietjack.com";
    // }
    // $('.linktoCategory').click(function(){
    //     alert("Clicked");
    // });
    

});

 //--------------------------------------------
//  $('.autoplay').slick({
//   dots: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   // autoplay: true,
//   // autoplaySpeed: 2000,
// });
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
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
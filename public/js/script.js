$(function(){
    $(".hide").on("click", toggleNav)

    function toggleNav(){
      $(".links").toggleClass("active");
    }
  
})
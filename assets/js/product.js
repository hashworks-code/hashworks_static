$(document).ready(function(){
    
    function checkWidth() {
        var windowSize = $(window).width();
        if (windowSize <= 768) {
            $("#carousel").addClass("single-item");
        }
        else{
            $("#carousel").removeClass("single-item");
        }

    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    $(window).load(checkWidth);
    $('.single-item').slick({
        nextArrow: '<i class="ion-ios-arrow-right slickprod"></i>',
        prevArrow: '<i class="ion-ios-arrow-left slickprod1"></i>',

       });
  });
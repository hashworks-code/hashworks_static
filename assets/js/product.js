$(document).ready(function(){
    
    function checkWidth() {
        var windowSize = $(window).width();
        console.log('hlo',windowSize)
        if (windowSize <= 768) {
            $("#carousel").addClass("single-item");
            console.log('hi',windowSize)
        }
        else{
            $("#carousel").removeClass("single-item");
            console.log('bye',windowSize)
        }

    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    $(window).load(checkWidth);
    $('.single-item').slick({
        infinite: true
       });
  });
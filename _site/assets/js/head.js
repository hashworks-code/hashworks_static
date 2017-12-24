

    $(document).ready(function(){
        $(' .btn-outline-primary').click(function(){

 	      var categoryValue=$(this).attr('data-filter');
        $(this).addClass('active').siblings().removeClass('active');
			if(categoryValue=="all") {
				$('.filter').show(1000);
			} else {
				$(".filter").not('.'+categoryValue).hide('3000');
            	$('.filter').filter('.'+categoryValue).show('3000');
			}
 });
     });



$('#producttoggle').click(function () {
  $('#mydiv').toggle()
  
});

$('#arrow').click(function () {
  $('#mydiv').toggle()
});

$('#abouttoggle').click(function () {
  $('#aboutContent').toggle()
});
$(window).resize(function(){
    if($(window).width()<768){
        $('.loader').hide();
         $('.menulist').hide();
    }

});
if($(window).width()<768){

                setTimeout(function(){ 
                    
                            // $('.loader').hide();
                            $('.loader').fadeOut()
            
                            }, 4500);
                            setTimeout(function(){
                                 $('.home__hashworks--logo').css('display','block');
            
                                // $('.home-container--logo').fadeIn(1000);
            
                            },5000)
            
            }

           
            
            $('.hashworks__head--product').click(function(e){
                $('#myDropdown').toggle();
                $("#aboutDropdown").hide();
                e.stopPropagation();
            });
            $('#myDropdown,#aboutDropdown').click(function(e){
               $(this).show();
               e.stopPropagation();
            })

            
            $('.hashworks__head--about').click(function(e){
                $('#myDropdown').hide();
                $("#aboutDropdown").toggle();
                e.stopPropagation();
            })
            $(document).click(function(){

                $('#myDropdown').hide();
                $("#aboutDropdown").hide();
            })

    

    function redirect(x){
      window.location = x;
    }

    (function($) {
        $.fn.menumaker = function(options) {  
          var cssmenu = $(this), settings = $.extend({
            format: "dropdown",
            sticky: false
          }, options);
          return this.each(function() {
            $(this).find(".button").on('click', function(){
              $(this).toggleClass('menu-opened');
              var mainmenu = $(this).next('ul');
              if (mainmenu.hasClass('open')) { 
                mainmenu.slideToggle().removeClass('open');
              }
              else {
                mainmenu.slideToggle().addClass('open');
                if (settings.format === "dropdown") {
                  mainmenu.find('ul').show();
                }
              }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
          multiTg = function() {
              cssmenu.find(".has-sub").prepend('<span class="submenu-button up-arrow"></span>');
              cssmenu.find('.submenu-button').on('click', function() {
                $(this).toggleClass('up-arrow');
                $(this).toggleClass('down-arrow');
                $(this).toggleClass('submenu-opened');

                
              if($(this).parent('li').siblings('li').children('span').hasClass('down-arrow')){
                  $(this).parent().siblings('li').children('span').removeClass('down-arrow');
                  $(this).parent().siblings('li').children('span').addClass('up-arrow')

              }
             
              $(this).siblings('ul').slideToggle();
              $(this).parent('li').siblings().children('ul').slideUp();
              });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
          resizeFix = function() {
            var mediasize = 1000;
              if ($( window ).width() > mediasize) {
                cssmenu.find('ul').show();
              }
              if ($(window).width() <= mediasize) {
                cssmenu.find('ul').hide().removeClass('open');
              }
            };
            resizeFix();
            return $(window).on('resize');
          });
            };
          })(jQuery);
  
          (function($){
          $(document).ready(function(){
          $("#cssmenu").menumaker({
            format: "multitoggle"
          });
          });
          })(jQuery);
    
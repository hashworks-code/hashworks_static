

function redirect(x) {
    window.location = x;
}

(function($) {
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function() {
            $(this).find(".button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show()
                    }
                }
            });

            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button down-arrow"></span>');
                cssmenu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('down-arrow');
                    $(this).toggleClass('up-arrow');
                    $(this).toggleClass('submenu-opened');


                    if ($(this).parent('li').siblings('li').children('span').hasClass('up-arrow')) {
                        $(this).parent().siblings('li').children('span').removeClass('up-arrow');
                        $(this).parent().siblings('li').children('span').addClass('down-arrow')

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
                if ($(window).width() > mediasize) {
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

(function($) {
    $(document).ready(function() {
        $("#cssmenu").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);

$(window).resize(function() {
    if ($(window).width() < 768) {
        $('.home__hashworks--logo').css('display', 'block');
        $('.loader').hide();
        $('#myDropdown,#aboutDropdown,#mypopover,#mypopover-about').hide();
    }

});


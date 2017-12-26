// Add your custom JS code here


var scriptsExtras = {
    init: function () {
        // scriptsExtras.preloader();
    },
    preloader: function(){
        $('#jpreOverlay').hide();
        
    },

}
$(document).on('ready', function () {
    scriptsExtras.init();
    
    var timer;	
    
    $('#navigation a').on('click', function () {
        if (!$(this).hasClass('btn-main')) {
            $('#navigation a')
                .toggleClass('btn-secondary')
                .toggleClass('btn-main');
    
            var tar = $(this).attr('href');
            $('.holder').fadeOut(500, function () {
                $(tar).fadeIn(500);
            });
        }
        return false;
    });
    $('#set2').hide();
    $('#header').css('top', '-100px');
    $('#footer').css('bottom', '-100px');
    $('#wrapper').hide();
    
    $('body').jpreLoader({
        splashID: "#jSplash",
        loaderVPos: '50%',
        autoClose: true,
        splashFunction: function () {
            $('#jSplash').children('section').not('.selected').hide();
            $('#jSplash').hide().fadeIn(800);
    
            timer = setInterval(function () {
                splashRotator();
            }, 4000);
        }
    }, function () {	
        clearInterval(timer);
        $('#footer')
            .animate({ "bottom": 0 }, 500);
        $('#header')
            .animate({ "top": 0 }, 800, function () {
                $('#wrapper').fadeIn(1000);
            });
    });
    
    function splashRotator() {
        var cur = $('#jSplash').children('.selected');
        var next = $(cur).next();
    
        if ($(next).length != 0) {
            $(next).addClass('selected');
        } else {
            $('#jSplash').children('section:first-child').addClass('selected');
            next = $('#jSplash').children('section:first-child');
        }
    
        $(cur).removeClass('selected').fadeOut(800, function () {
            $(next).fadeIn(800);
        });
    }
});

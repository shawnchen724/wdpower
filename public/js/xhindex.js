$(function () {
    $(document).scroll(function () {
        var result = $(window).width();
        if (result < 784) {
            if ($(this).scrollTop() >= 244) {
                $('.page-tabs').css({
                    "position": 'fixed',
                    'top': 30
                })
            }else {
                $('.page-tabs').css({
                    "position": 'static'
                })
            }
        }else {
            if ($(this).scrollTop() >= 344) {
                $('.page-tabs').css({
                    "position": 'fixed',
                    'top': 30
                })
            }else {
                $('.page-tabs').css({
                    "position": 'static'
                })
            }
        }
    })
});